'use strict';

angular.module('BlurAdmin')
.value('redirectToUrlAfterLogin', { url: '/' })
  .factory('Auth', function Auth($location, $rootScope, $http, User, $cookieStore, $q, redirectToUrlAfterLogin,PermRoleStore,PermPermissionStore) {
    var currentUser = {};
    if($cookieStore.get('token')) {
      currentUser = User.get();
    }
    console.log('auth-----init')
    return {

      /**
       * Authenticate user and save token
       *
       * @param  {Object}   user     - login info
       * @param  {Function} callback - optional
       * @return {Promise}
       */

      setcurrentUser: function() {
        console.log('setcurrentUser')
        currentUser = User.get();
        console.log(currentUser._id)
      },
      login: function(user, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.post('/auth/local', {
          email: user.email,
          password: user.password
        }).
        success(function(data) {
          console.log(data)

          $cookieStore.put('token', data.token);
           $cookieStore.put('role', data.role);
          currentUser = User.get();
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
            $cookieStore.put('token', data.token);
            currentUser = User.get();
            return cb(user);
          },
          function(err) {
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
        console.log('getCurrentUser')
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
