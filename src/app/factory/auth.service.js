'use strict';

angular.module('BlurAdmin')
  .factory('Auth', function Auth($location, $rootScope, $http, User, $cookieStore, $q, redirectToUrlAfterLogin,PermRoleStore,PermPermissionStore,serverUrl,javaServerUrl) {
    console.log('auth---init');
    var currentUser = {};
    if($cookieStore.get('id')) {
      var userid = $cookieStore.get('id');
      console.log('($cookieStore.get()~~~~~~~~~~~~~~')
       User.getUserInfo(userid,function(res){
         currentUser =res;
       });
      console.log(currentUser)

      console.log('cookies-----set-role '+$cookieStore.get('role'));
      PermPermissionStore
            .definePermission('wangfa', function () {
              return $cookieStore.get('role')==="1";
            });
      PermPermissionStore
            .definePermission('dailishang', function () {
              return $cookieStore.get('role')==="2";
            });
      PermPermissionStore
            .definePermission('gongyingshang', function () {
              return $cookieStore.get('role')==="3";
            });
      PermPermissionStore
            .definePermission('shejichangshang', function () {
              return $cookieStore.get('role')==="4";
            });
      PermPermissionStore
            .definePermission('canlist',function(){
                return true;
            });
    }
    return {

      /**
       * Authenticate user and save token
       *
       * @param  {Object}   user     - login info
       * @param  {Function} callback - optional
       * @return {Promise}
       */

      setcurrentUser: function() {
        currentUser = User.get();
        console.log(currentUser._id)
      },
      login: function(user, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();


        $http.post(javaServerUrl.url+'login', {
          email: user.email,
          password: user.password
        }).
        success(function(data) {
          console.log('loginClick----');
          console.log(data);

        // $cookieStore.remove('token');
        // $cookieStore.remove('role');
        // PermPermissionStore.clearStore();
          console.log(data);
          $cookieStore.put('role', data.data.roles);
          $cookieStore.put('token', data.data.token);
          $cookieStore.put('id', data.data.id);
          // $cookieStore.put('role', data.role);

          console.log('login~~~~~~~~~~~~permissionRun~~~~~~~~~~~~~~');
          console.log($cookieStore.get('role'));


                PermPermissionStore
                      .definePermission('wangfa', function () {
                        return data.data.roles==="1";
                      });
                PermPermissionStore
                      .definePermission('dailishang', function () {
                        return data.data.roles==="2";
                      });
                PermPermissionStore
                      .definePermission('gongyingshang', function () {
                        return data.data.roles==="3";
                      });
                PermPermissionStore
                      .definePermission('shejichangshang', function () {
                        return data.data.roles==="4";
                      });
                PermPermissionStore
                      .definePermission('canlist',function(){
                          return true;
                      });




          currentUser = data.data;
          console.log('login-user')
          console.log(currentUser);
          deferred.resolve(data);
          return cb();
        }).
        error(function(err) {
          this.logout();
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      },

      /**
       * Delete access token and user info
       *
       * @param  {Function}
       */
      logout: function() {
        $cookieStore.remove('token');
        $cookieStore.remove('role');
        PermPermissionStore.clearStore();
        currentUser = {};
      },
      saveAttemptUrl: function() {
        if($location.path().toLowerCase() !== '/login' || $location.path().toLowerCase() !== '/signup') {
          redirectToUrlAfterLogin.url = $location.path();
        }
        else {
          redirectToUrlAfterLogin.url = '/';
        }
      },
      redirectToAttemptedUrl: function() {
        $location.path(redirectToUrlAfterLogin.url);
      },
      /**
       * Create a new user
       *
       * @param  {Object}   user     - user info
       * @param  {Function} callback - optional
       * @return {Promise}
       */
      createUser: function(user, callback) {
        var cb = callback || angular.noop;

        return User.save(user,
          function(data) {
            console.log('success-creat');
            console.log(data);
            // $cookieStore.put('token', data.token);
            // currentUser = User.get();
            // return cb(user);
          },
          function(err) {
            console.log('errrr');
            this.logout();
            return cb(err);
          }.bind(this)).$promise;
      },

      /**
       * Change password
       *
       * @param  {String}   oldPassword
       * @param  {String}   newPassword
       * @param  {Function} callback    - optional
       * @return {Promise}
       */
      changePassword: function(oldPassword, newPassword, callback) {
        var cb = callback || angular.noop;

        return User.changePassword({ id: currentUser._id }, {
          oldPassword: oldPassword,
          newPassword: newPassword
        }, function(user) {
          return cb(user);
        }, function(err) {
          return cb(err);
        }).$promise;
      },

      /**
       * Gets all available info on authenticated user
       *
       * @return {Object} user
       */
      getCurrentUser: function() {
        return currentUser;
      },

      /**
       * Check if a user is logged in
       *
       * @return {Boolean}
       */
      isLoggedIn: function() {
        return currentUser.hasOwnProperty('role');
      },

      /**
       * Waits for currentUser to resolve before checking if user is logged in
       */
      isLoggedInAsync: function(cb) {
        if(currentUser.hasOwnProperty('$promise')) {
          currentUser.$promise.then(function() {
            cb(true);
          }).catch(function() {
            cb(false);
          });
        } else if(currentUser.hasOwnProperty('role')) {
          cb(true);
        } else {
          cb(false);
        }
      },

      /**
       * Check if a user is an admin
       *
       * @return {Boolean}
       */
      isAdmin: function() {
        return currentUser.role === 'admin';
      },
      getRole: function () {
        return currentUser.role;
      },
      /**
       * Get auth token
       */
      getToken: function() {
        return $cookieStore.get('token');
      },

     hasPermission: function(permission, transitionProperties) {
            var deferred = $q.defer();
            var hasPermission = false;

            // check if user has permission via its roles
     console.log("HHH:"+getRole());
                // check role exists
                if(PermRoleStore.hasRoleDefinition(getRole())) {
                    // get the role
                    var roleDef =PermRoleStore.getRoleDefinition(getRole());
                    console.log("----)))"+roleDef);
                    // check if the permission we are validating is in this role's permissions
                    if(-1 !== roleDef.permissionNames.indexOf(permission)) {
                        hasPermission = true;
                    }
                }


            // if we have permission resolve otherwise reject the promise
            if(hasPermission) {
                deferred.resolve();
            }
            else {
                deferred.reject();
            }

            // return promise
            return deferred.promise;
        }

    };
  });
