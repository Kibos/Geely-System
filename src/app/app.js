'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  'permission',
  'permission.ui',
  'LocalStorageModule',

  'BlurAdmin.theme',
  'BlurAdmin.pages'
])
.run(permissionRun)

.config(function ($httpProvider, $locationProvider, localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('myApp')
    .setStorageType('sessionStorage')
    .setNotify(true, true)

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  $httpProvider.interceptors.push('authInterceptor');
})
 
.factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
  return {
    // Add authorization token to headers
    request: function (config) {
      config.headers = config.headers || {};
      if ($cookieStore.get('token')) {
        config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError: function(response) {
      if(response.status === 401) {
        $location.path('/login');
        // remove any stale tokens
        $cookieStore.remove('token');
        return $q.reject(response);
      }
      else {
        return $q.reject(response);
      }
    }
  };
})



   function permissionRun($rootScope,  $cookieStore, $state, PermRoleStore, PermPermissionStore, Auth) {
        // normally this would be done at the login page but to show quick
        // demo we grab username from cookie and login the user
        /*var cookieUser = $cookies.get('tri-user');
        if(angular.isDefined(cookieUser)) {
            UserService.login(cookieUser);
        }*/
        // console.log('~~~~~~~~~~~~permissionRun~~~~~~~~~~~~~~');
        PermPermissionStore
              .definePermission('wangfa', function () {
                return $cookieStore.get('role')==="admin";
              });
        PermPermissionStore
              .definePermission('dailishang', function () {
                return $cookieStore.get('role')==="user";
              });
        PermPermissionStore
              .definePermission('gongyingshang', function () {
                return $cookieStore.get('role')==="gonguser";
              });
        PermPermissionStore
              .definePermission('shejichangshang', function () {
                return $cookieStore.get('role')==="deuser";
              });
        PermPermissionStore
              .definePermission('canlist',function(){
                  return true;
              });
// -----------------------------
        // create roles for app
        // PermRoleStore
        // .defineRole('canReadInvoice', ['canReadInvoice'],checkRole);

       PermRoleStore
        .defineRole('USER', ['canReadInvoice','canReadCharts','canlist'],function(){
            return $cookieStore.get('role')==='user';
        });
       PermRoleStore
        .defineRole('ADMIN', ['canReadInvoice','canReadCharts','canlist'],function(){
            return $cookieStore.get('role')==='admin';
        });

//  PermRoleStore
//   // Or use your own function/service to validate role
//   .defineRole('USER', function () {
//     return $cookieStore.get('role');
//   });


// PermRoleStore
// // Or use your own function/service to validate role
// .defineManyRoles({
// 'USER': ['canReadInvoices'],
// 'ADMIN': ['canReadInvoices','canEditInvoices','canUploadImages']
// });

        // default redirect if access is denied
        function accessDenied() {
            console.log('401');
            $state.go('401');
        }

        // function that calls user service to check if permission is allowed
        // function that calls user service to check if permission is allowed
        // function checkRole(permission, transitionProperties) {
        //      console.log('22checkRole ======'+$cookieStore.get('role'));
        //       if($cookieStore.get('role')==='user')
        //         return true;
        //     return false;
        // }

       function checkRole(permission, transitionProperties) {
            console.log('22checkRole  lll'+$cookieStore.get('role'));
            return Auth.hasPermission(permission, transitionProperties);
        }

        // watches

        // redirect all denied permissions to 401
        var deniedHandle = $rootScope.$on('$stateChangePermissionDenied', accessDenied);

        // remove watch on destroy
        $rootScope.$on('$destroy', function() {
            deniedHandle();
        });
    }



;
