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

;
