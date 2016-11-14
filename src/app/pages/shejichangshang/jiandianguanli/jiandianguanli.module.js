/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.shejichangshang.jiandianguanliss', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      .state('ba.jdgli.design', {
        url: '/jdgli.design',
        controller: 'designCtrl',
        templateUrl: 'app/pages/shejichangshang/jiandianguanli/design.html',
          title: '设计稿管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 10,
          },
      })
      .state('ba.designfirst', {
        url: '/designfirst',
        controller: 'designfirstCtrl',
        templateUrl: 'app/pages/shejichangshang/jiandianguanli/designfirst.html',
        params:{
          obj:null
        },

      })
      .state('ba.designfinal', {
        url: '/designfinal',
        controller: 'designfinalCtrl',
        templateUrl: 'app/pages/shejichangshang/jiandianguanli/designfinal.html',
        params:{
          obj:null
        },

      })
      .state('ba.designfinished', {
        url: '/designfinished',
        controller: 'designfinishedCtrl',
        templateUrl: 'app/pages/shejichangshang/jiandianguanli/designfinished.html',
        params:{
          obj:null
        },

      })
      .state('ba.jdgli.shigongtu', {
        url: '/jdgli.shigongtu',
        template: '<div></div>',
          title: '施工图管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 20,
          },
      })
      .state('ba.jdgli.shigongjindu', {
        url: '/jdgli.shigongjindu',
        template: '<div></div>',
          title: '施工进度管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 30,
          },
      })
      .state('ba.jdgli.yanshougl', {
        url: '/jdgli.yanshougl',
        controller: 'yanshouglCtrl',
        templateUrl: 'app/pages/shejichangshang/jiandianguanli/yanshougl/yanshougl.html',
          title: '验收管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 40,
          },
      })
      .state('ba.jdgli.yanshouglCheck', {
        url: '/yanshouglCheck',
        controller: 'yanshouglCheckCtrl',
        templateUrl: 'app/pages/shejichangshang/jiandianguanli/yanshougl/yanshouglCheck.html',
        params:{
          obj:null
        },

      })
      ;


  }
})();
