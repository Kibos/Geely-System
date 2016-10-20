/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ba.dashboard', {
          url: '/dashboard',
          cache:'true', 
          controller: 'dashboardCtrl',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: '工作台',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();
