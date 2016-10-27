/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.rectificationsq', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      .state('ba.rectificationsq', {
        url: '/rectificationsq',
        controller: 'rectificationsqCtrl',
        templateUrl: 'app/pages/dailishang/rectificationsq/rectificationsq.html',
        params:{
          obj:null
        },
        title: '整改申请',
        sidebarMeta: {
          icon: 'ion-gear-a',
          order: 30,
        },
        data:{
           permissions: {
            only:'dailishang'
         }}
      })
      .state('ba.submitreport', {
        url: '/submitreport',
        controller: 'submitreportCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/dailishang/rectificationsq/submitreport.html',
        params:{
          obj:null
        }

      })
      .state('ba.leadercheck', {
        url: '/leadercheck',
        controller: 'leadercheckCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/dailishang/rectificationsq/leadercheck.html',
        params:{
          obj:null
        }

      })

  }
})();
