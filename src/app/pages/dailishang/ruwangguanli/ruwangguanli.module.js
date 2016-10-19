/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.ruwangguanlia', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      .state('ba.ruwangguan.ruwangshenqinga', {
        url: '/ruwangguan.ruwangshenqinga',
        controller: 'InfoCtrl',
        templateUrl: 'app/pages/dailishang/ruwangguanli/info/info.html',
          title: '入网申请',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100
          },
          data:{
             permissions: {
              only:'dailishang'
           }}
      })
      .state('ba.ruwangguan.chaxun', {
        url: '/ruwangguan.chaxun',
        template: '<div></div>',
          title: '进度查询',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 101
          },
          data:{
             permissions: {
              only:'dailishang'
           }}
      });
      


  }
})();