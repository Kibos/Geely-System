/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.gonghuogl', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('ba.jiandianguanli.gonghuogl', {
        url: '/gonghuogl',
        controller: 'gonghuoglCtrl',
        templateUrl: 'app/pages/wangfa/gonghuogl/gonghuogl.html',
          title: '供货管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 30,
          },
      })
      .state('ba.jiandianguanli.gonghuogldetail', {
        url: '/gonghuogldetail',
        controller: 'gonghuogldetailCtrl',
        templateUrl: 'app/pages/wangfa/gonghuogl/gonghuogldetail.html',
          params:{
            obj:null
          },
      })
      // .state('ba.jiandianguanli.buildstorebtdetail', {
      //   url: '/buildstorebtdetail',
      //   controller: 'buildstorebtdetailCtrl',
      //   templateUrl: 'app/pages/wangfa/buildstorebt/buildstorebtdetail.html',
      //   params:{
      //     obj:null
      //   },
      //
      // })
      // .state('ba.jiandianguanli.buildstorebtcheck', {
      //   url: '/buildstorebtcheck',
      //   controller: 'buildstorebtcheckCtrl',
      //   templateUrl: 'app/pages/wangfa/buildstorebt/buildstorebtcheck.html',
      //   params:{
      //     obj:null
      //   },
      //
      // });
  }
})();
