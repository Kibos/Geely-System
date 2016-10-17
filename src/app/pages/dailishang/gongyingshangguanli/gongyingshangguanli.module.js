/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.gongyingshangguanli', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      .state('ba.gongyingshangguanli.gonghuohetong', {
        url: '/gonghuohetong',
        template: '<div></div>',
          title: '供货合同管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      .state('ba.gongyingshangguanli.gonghuo', {
        url: '/gonghuo',
        template: '<div></div>',
          title: '供货管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
      


  }
})();