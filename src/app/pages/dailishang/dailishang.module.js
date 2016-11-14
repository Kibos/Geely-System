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
      'BlurAdmin.pages.dailishang.constructionmanagement',
      'BlurAdmin.pages.dailishang.shejishangguanli',
      'BlurAdmin.pages.dailishang.gongyingshangguanli',
      'BlurAdmin.pages.dailishang.rectificationsq'

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
        //   title: '代理商信息维护',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //   data:{
        //      permissions: {
        //       only:'dailishang'
        //    }}
        // })
        .state('ba.constructionmanagement', {
          url: '/constructionmanagement',
          controller: 'constructionmanagementCtrl',
          controllerAs:'vm',
          templateUrl: 'app/pages/dailishang/constructionmanagement/constructionmanagement.html',
          title: '施工管理',
          sidebarMeta:{
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
          controller:'jiaonabzjCtrl',
          templateUrl : 'app/pages/dailishang/jiaonabzj/jiaonabzj.html',

          title: '缴纳保证金',
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
          controller: 'acceptancesqCtrl',
          templateUrl: 'app/pages/dailishang/acceptancesq/acceptancesq.html',
          params:{
            obj:null
          },
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
        // .state('ba.zhenggaishenqing', {
        //   url: '/zhenggaishenqing',
        //   controller: 'rectificationsqCtrl',
        //   templateUrl: 'app/pages/dailishang/rectificationsq/rectificationsq.html',
        //   title: '整改申请',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 30,
        //   },
        //   data:{
        //      permissions: {
        //       only:'dailishang'
        //    }}
        // })
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
          controller: 'contractsupplyCtrl',
          templateUrl: 'app/pages/dailishang/hetonggh/contractsupply.html',
          params:{
            obj:null
          },
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
