/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.bzjgl', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
       .state('ba.jiandianguanli.baozhengjinguanli', {
        url: '/jiandianguanli.baozhengjinguanli',
        controller: 'bzjglCtrl',
        templateUrl: 'app/pages/wangfa/bzjgl/bzjgl.html',
          title: '保证金管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 1,
          },
          data:{
             permissions: {
              only:'wangfa'
            }
          }
      });
      
  }
})();