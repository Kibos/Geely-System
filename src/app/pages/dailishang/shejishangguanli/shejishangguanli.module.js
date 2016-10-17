/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.shejishangguanli', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      .state('ba.shejishangguanli.shejihetong', {
        url: '/shejihetong',
        template: '<div></div>',
          title: '设计合同管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      .state('ba.shejishangguanli.shejigao', {
        url: '/shejigao',
        template: '<div></div>',
          title: '设计稿管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
      


  }
})();