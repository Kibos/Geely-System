/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.yunying', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      .state('ba.yunying.xingxiang', {
        url: '/xingxiang',
        template: '<div></div>',
          title: '形象管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      .state('ba.yunying.kaohe', {
        url: '/kaohe',
        template: '<div></div>',
          title: '考核管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      .state('ba.yunying.tuiwang', {
        url: '/tuiwang',
        template: '<div></div>',
          title: '退网管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
      


  }
})();