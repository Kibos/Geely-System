/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.buildingType', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      // .state('ba.jiandianleixingweihu', {
      //   url: '/buildingType',
      //   controller: 'BuildingTypeCtrl',
      //   templateUrl: 'app/pages/wangfa/buildingType/buildingType.html',
      //     title: '建店类型维护',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      //     data:{
      //        permissions: {
      //         only:'wangfa'
      //      }
      // })
      .state('ba.jiandianleixingweihu', {
          url: '/jiandianleixingweihu',
          controller: 'BuildingTypeCtrl',
          templateUrl: 'app/pages/wangfa/buildingType/buildingType.html',
          title: '建店类型维护',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
          data:{
              permissions: {
               only:'wangfa'
            }
          }
        })
      .state('ba.addType', {
        url: '/addType',
        controller: 'AddTypeCtrl',
        templateUrl: 'app/pages/wangfa/buildingType/addType.html',
        data:{
             permissions: {
              only:'wangfa'
            }
          }
          
      });
      
  }
})();