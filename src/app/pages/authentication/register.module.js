/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.register', [

  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('register', {
          url: '/register',
          title: 'register',
          views: {
              'fullWindow': {
                templateUrl: 'app/pages/authentication/register.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
              },
            }
        });
  }

})();
