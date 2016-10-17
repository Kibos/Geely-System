/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang', [
      'BlurAdmin.pages.dailishang.ruwangguanlia',
      'BlurAdmin.pages.dailishang,mianshi',
      'BlurAdmin.pages.dailishang.yunying',
      'BlurAdmin.pages.dailishang.shigongguanli',
      'BlurAdmin.pages.dailishang.shejishangguanli',
      'BlurAdmin.pages.dailishang.gongyingshangguanli'

  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider

        // .state('ba.jiameng', {
        //   url: '/jiameng',
        //   template : '<ui-view></ui-view>',
        //   title: '加盟流程',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //   data:{
        //      permissions: {
        //       only:'dailishang'
        //    }}
        // })
        // .state('ba.xinxiweihu', {
        //   url: '/xinxiweihu',
        //   template : '<ui-view></ui-view>',
        //   title: '合作商信息维护',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //   data:{
        //      permissions: {
        //       only:'dailishang'
        //    }}
        // })
        .state('ba.shigongguanli', {
          url: '/shigongguanli',
          template : '<ui-view></ui-view>',
    
          title: '施工管理',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 11,
          },
           data:{
             permissions: {
              only:'dailishang'
           }}
        })
        // .state('ba.shejishangguanli', {
        //   url: '/shejishangguanli',
        //   template : '<ui-view></ui-view>',
        //   abstract: true,
        //   title: '设计商管理',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //    data:{
        //      permissions: {
        //       only:'dailishang'
        //    }}
        // })
        // .state('ba.gongyingshangguanli', {
        //   url: '/gongyingshangguanli',
        //   template : '<ui-view></ui-view>',
        //   abstract: true,
        //   title: '供应商管理',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //    data:{
        //      permissions: {
        //       only:'dailishang'
        //    }}
        // })
        .state('ba.baozhengjinguanli', {
          url: '/baozhengjinguanli',
          template : '<ui-view></ui-view>',
         
          title: '保证金管理',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
          data:{
             permissions: {
              only:'dailishang'
           }}
        })
        .state('ba.yanshoushenqing', {
          url: '/yanshoushenqing',
          template : '<ui-view></ui-view>',
         
          title: '验收申请',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 20,
          },
          data:{
             permissions: {
              only:'dailishang'
           }}
        })
        // .state('ba.mianshi', {
        //   url: '/mianshi',
        //   template : '<ui-view></ui-view>',
        //   abstract: true,
        //   title: '面试培训',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //   data:{
        //      permissions: {
        //       only:'dailishang'
        //    }}
        // })
         .state('ba.ruwangguan', {
          url: '/ruwangguan',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: '入网管理',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 10,
          },
          data:{
             permissions: {
              only:'dailishang'
           }}
        })
        .state('ba.hetonggh', {
          url: '/hetonggh',
          template : '<ui-view></ui-view>',
        
          title: '合同供货管理',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 19,
          },
           data:{
             permissions: {
              only:'dailishang'
           }}
        }
        );
        ;


  }

})();
