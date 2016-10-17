/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.designCheck', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('ba.jiandianguanli.designCheck', {
        url: '/designCheck',
        controller: 'DesignCheckCtrl',
        templateUrl: 'app/pages/wangfa/designCheck/designCheck.html',
          title: '建店设计审核',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },  
          data:{
             permissions: {
              only:'wangfa'
            }
          }
      })
      .state('ba.jiandianguanli.storeCheck', {
        url: '/storeCheck',
        controller: 'StoreCheckCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/wangfa/designCheck/storeCheck.html',
        params:{
          obj:null
        },  
          data:{
             permissions: {
              only:'wangfa'
          }
        }

      });
  }
})();
