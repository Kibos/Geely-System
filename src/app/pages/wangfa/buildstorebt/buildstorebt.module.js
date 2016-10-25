/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.buildstorebt', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('ba.jiandianguanli.buildstorebt', {
        url: '/buildstorebt',
        controller: 'buildstorebtCtrl',
        templateUrl: 'app/pages/wangfa/buildstorebt/buildstorebt.html',
          title: '建店补贴',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 30,
          },
      })
      .state('ba.jiandianguanli.buildstorebtdetail', {
        url: '/buildstorebtdetail',
        controller: 'buildstorebtdetailCtrl',
        templateUrl: 'app/pages/wangfa/buildstorebt/buildstorebtdetail.html',
        params:{
          obj:null
        },

      })
      .state('ba.jiandianguanli.buildstorebtcheck', {
        url: '/buildstorebtcheck',
        controller: 'buildstorebtcheckCtrl',
        templateUrl: 'app/pages/wangfa/buildstorebt/buildstorebtcheck.html',
        params:{
          obj:null
        },

      });
  }
})();
