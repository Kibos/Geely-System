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
        data:{
             permissions: {
              only:'wangfa'
            }
          }

          
      })
      .state('ba.jiandianguanli.lookCheck', {
        url: '/lookCheck',
        controller: 'LookCheckCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/wangfa/designCheck/lookCheck.html',
        data:{
             permissions: {
              only:'wangfa'
            }
          }

          
      })
      .state('ba.jiandianguanli.cgdsp', {
        url: '/cgdsp',
        controller: 'cgdspCtrl',
        templateUrl: 'app/pages/wangfa/designCheck/cgdsp.html',
        data:{
             permissions: {
              only:'wangfa'
            }
          }

          
      })
      .state('ba.jiandianguanli.cgdldsp', {
        url: '/cgdldsp',
        controller: 'cgdldspCtrl',
        templateUrl: 'app/pages/wangfa/designCheck/cgdldsp.html',
        data:{
             permissions: {
              only:'wangfa'
            }
          }

          
      })
      .state('ba.jiandianguanli.zgdsp', {
        url: '/zgdsp',
        controller: 'zgdspCtrl',
        templateUrl: 'app/pages/wangfa/designCheck/zgdsp.html',
        data:{
             permissions: {
              only:'wangfa'
            }
          }

          
      })
      .state('ba.jiandianguanli.zgdldsp', {
        url: '/zgdldsp',
        controller: 'zgdldspCtrl',
        templateUrl: 'app/pages/wangfa/designCheck/zgdldsp.html',
        data:{
             permissions: {
              only:'wangfa'
            }
          }

          
      });
  }
})();
