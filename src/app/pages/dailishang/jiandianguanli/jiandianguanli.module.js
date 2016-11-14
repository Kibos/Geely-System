/**
 * @author sunxuanxuan
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.jiandiangl', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      .state('ba.jiandiangl.yanshoushenqing', {
        url: '/jiandiangl.yanshoushenqing',
        controller: 'acceptancesqCtrl',
        templateUrl: 'app/pages/dailishang/jiandianguanli/acceptancesq/acceptancesq.html',
        params:{
          obj:null
        },
        title: '验收申请',
        sidebarMeta: {
          icon: 'ion-gear-a',
          order: 10,
        },
        data:{
           permissions: {
            only:'dailishang'
         }}
      })
      .state('ba.jiandiangl.rectificationsq', {
        url: '/jiandiangl.rectificationsq',
        controller: 'rectificationsqCtrl',
        templateUrl: 'app/pages/dailishang/jiandianguanli/rectificationsq/rectificationsq.html',
        params:{
          obj:null
        },
        title: '整改申请',
        sidebarMeta: {
          icon: 'ion-gear-a',
          order: 20,
        },
        data:{
           permissions: {
            only:'dailishang'
         }}
      });


  }
})();
