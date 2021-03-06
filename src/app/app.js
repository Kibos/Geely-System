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
  'angularFileUpload',
  'angular.city.select',


  'BlurAdmin.theme',
  'BlurAdmin.pages'

])
.value('filesUrl',{url:'http://127.0.0.1:8080'}) //上线环境 ''   开发环境：'http://127.0.0.1:8080'
.value('redirectToUrlAfterLogin', { url: '/' }) //不变
.value('serverUrl',{url:'http://127.0.0.1:8080'})   //上线环境 ''   开发环境：'http://127.0.0.1:8080'
.value('javaServerUrl',{url:'http://101.201.81.214:8080/'})

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
        config.headers.Authorization =  $cookieStore.get('token');
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError: function(response) {
      console.log('404');
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

.run(permissionRun)


   function permissionRun($rootScope,  $cookieStore, $state, PermRoleStore, PermPermissionStore, Auth) {
        // console.log('a');
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


        // default redirect if access is denied
        function accessDenied() {
            console.log('401');
            $state.go('login');
        }


        // redirect all denied permissions to 401
        var deniedHandle = $rootScope.$on('$stateChangePermissionDenied', accessDenied);

        // remove watch on destroy
        $rootScope.$on('$destroy', function() {
            deniedHandle();
        });
    };
