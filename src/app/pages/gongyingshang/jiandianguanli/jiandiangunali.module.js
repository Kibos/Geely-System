/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.gongyingshang.jiandian', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      .state('ba.shcreatemgr.shgaoguanli', {
        url: '/shgaoguanli',
        template: '<div></div>',
          title: '合同管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      .state('ba.shcreatemgr.shigongtuguanli', {
        url: '/shigongtuguanli',
        template: '<div></div>',
          title: '供货管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });


  }
})();