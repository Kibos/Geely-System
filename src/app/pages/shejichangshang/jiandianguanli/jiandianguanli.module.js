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
      .state('ba.jdgli.shejigao', {
        url: '/jdgli.shejigao',
        template: '<div></div>',
          title: '设计稿管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 10,
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
      });


  }
})();