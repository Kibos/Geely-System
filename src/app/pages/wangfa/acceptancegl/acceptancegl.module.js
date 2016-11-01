/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.acceptancegl', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('ba.jiandianguanli.acceptancegl', {
        url: '/acceptancegl',
        controller: 'acceptanceglCtrl',
        templateUrl: 'app/pages/wangfa/acceptancegl/acceptancegl.html',
          title: '验收管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 30,
          },
      })
      .state('ba.jiandianguanli.acceptanceglcheck', {
        url: '/acceptanceglcheck',
        controller: 'acceptanceglcheckCtrl',
        templateUrl: 'app/pages/wangfa/acceptancegl/acceptanceglcheck.html',
        params:{
          obj:null
        }

      })
      .state('ba.submitreport', {
        url: '/submitreport',
        controller: 'submitreportCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/wangfa/acceptancegl/submitreport.html',
        params:{
          obj:null
        }

      })
      .state('ba.leadercheck', {
        url: '/leadercheck',
        controller: 'leadercheckCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/wangfa/acceptancegl/leadercheck.html',
        params:{
          obj:null
        }

      });
  }
})();
