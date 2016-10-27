/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      // .state('ba.hezuohuoban.shejichang', {
      //   url: '/manufacturerManage',
      //   controller: 'ManufacturerManageCtrl',
      //   templateUrl: 'app/pages/wangfa/manufacturerManage/manufacturerManage.html',
      //    data:{
      //        permissions: {
      //         only:'wangfa'
      //      }
      //     }
      // })
        .state('ba.hezuohuoban', {
          url: '/hezuohuoban',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: '合作伙伴管理',
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
        .state('ba.hezuohuoban.shejichang', {
        url: '/hezuohuoban.shejichang',
        controller: 'ManufacturerManageCtrl',
        templateUrl: 'app/pages/wangfa/manufacturerManage/manufacturerManage.html',
          title: '设计厂商管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      .state('ba.hezuohuoban.gongyingshang', {
        url: '/hezuohuoban.gongyingshang',
        controller: 'supplierCtrl',
        templateUrl: 'app/pages/wangfa/manufacturerManage/supplier.html',

          title: '供应商管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })

      .state('ba.hezuohuoban.addgycs', {
        url: '/add',
        controller:'AddCtrl',
        controllerAs:'vm',
        templateUrl: 'app/pages/wangfa/manufacturerManage/add.html',
        params:{
          obj:null
        }
      })
      .state('ba.hezuohuoban.sjsxx', {
        url: '/sjsxx',
        controller:'sjsxxCtrl',
        controllerAs:'vm',
        templateUrl: 'app/pages/wangfa/manufacturerManage/sjsxx.html',
        params:{
          obj:null
        }
      })
      .state('ba.hezuohuoban.gysxx', {
        url: '/gysxx',
        controller:'gysxxCtrl',
        controllerAs:'vm',
        templateUrl: 'app/pages/wangfa/manufacturerManage/gysxx.html',
        params:{
          obj:null
        }
      });
  }
})();
