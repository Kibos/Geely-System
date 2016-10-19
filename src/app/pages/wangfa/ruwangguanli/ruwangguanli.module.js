/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.ruwangguanlisk', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
    .state('ba.rulisa.ruwangshenhe', {
      url: '/rulisa',
      controller: 'AuditCtrl',
      templateUrl: 'app/pages/wangfa/ruwangguanli/audit.html',
        title: '入网审核',
        sidebarMeta: {
          icon: 'ion-ios-pulse',
          order: 100,
        },
        data:{
           permissions: {
            only:'wangfa'
         }}
    })
    .state('ba.rulisa.check', {
      url: '/check',
      controller: 'CheckCtrl',
      templateUrl: 'app/pages/wangfa/ruwangguanli/check.html',
      params:{
        obj:null
      },
      data:{
         permissions: {
          only:'wangfa'
       }}

    })
    .state('ba.rulisa.inform', {
      url: '/inform',
      controller: 'InformCtrl',
      templateUrl: 'app/pages/wangfa/ruwangguanli/inform.html',
      params:{
        obj:null
      },
      data:{
         permissions: {
          only:'wangfa'
       }}

    })
    .state('ba.rulisa.ViewDetails', {
      url: '/ViewDetails',
      controller: 'ViewDetailsCtrl',
      templateUrl: 'app/pages/wangfa/ruwangguanli/ViewDetails.html',
      params:{
        obj:null
      },
      data:{
         permissions: {
          only:'wangfa'
       }}

    })
      //建店管理

      // .state('ba.jiandianguanli.shigongguanli', {
      //   url: '/jiandianguanli.shigongguanli',
      //   controller: 'ConstructionAuditCtrl',
      //   templateUrl: 'app/pages/wangfa/constructionAudit/constructionAudit.html',
      //     title: '施工管理',
      //     sidebarMeta: {
      //      icon: 'ion-ios-pulse',
      //       order: 20,
      //     },
      // })

      // .state('ba.jiandianguanli.shejigaoshenhe', {
      //   url: '/jiandianguanli.shejigaoshenhe',
      //   controller: 'CheckCtrl',
      //   templateUrl: 'app/pages/wangfa/ruwangguanli/check.html',
      //     title: '设计稿管理',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 10,
      //     },
      // })
      .state('ba.jiandianguanli.yanshouguanli', {
        url: '/jiandianguanli.yanshouguanli',
        template: '<div></div>',
          title: '验收管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 30,
          },
      })
      .state('ba.jiandianguanli.baozhengjinguanli', {
        url: '/jiandianguanli.baozhengjinguanli',
        template: '<div></div>',
          title: '保证金管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      // .state('ba.jiandianguanli.jiandianbutie', {
      //   url: '/jiandianguanli.jiandianbutie',
      //   template: '<div></div>',
      //     title: '建店补贴管理',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      //面试管理
      // .state('ba.mianshiguanli.daishenhe', {
      //   url: '/mianshiguanli.daishenhe',
      //   template: '<div></div>',
      //     title: '面试待审核',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      // .state('ba.mianshiguanli.daitongzhi', {
      //   url: '/mianshiguanli.daitongzhi',
      //   template: '<div></div>',
      //     title: '面试待通知',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      // .state('ba.mianshiguanli.jieguodailuru', {
      //   url: '/mianshiguanli.jieguodailuru',
      //   template: '<div></div>',
      //     title: '面试结果待录入',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      //培训管理
      // .state('ba.peixunguanli.jihuazhiding', {
      //   url: '/peixunguanli.jihuazhiding',
      //   template: '<div></div>',
      //     title: '培训计划制定',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      // .state('ba.peixunguanli.peixunshenhe', {
      //   url: '/peixunguanli.peixunshenhe',
      //   template: '<div></div>',
      //     title: '培训审核',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      // .state('ba.peixunguanli.peixunjieguo', {
      //   url: '/peixunguanli.peixunjieguo',
      //   template: '<div></div>',
      //     title: '培训结果',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      //运营管理
      // .state('ba.yunyingguanli.hezuoshangliebiao', {
      //   url: '/yunyingguanli.hezuoshangliebiao',
      //   template: '<div></div>',
      //     title: '合作商列表',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      // .state('ba.yunyingguanli.jingxiaoxieyi', {
      //   url: '/yunyingguanli.jingxiaoxieyi',
      //   template: '<div></div>',
      //     title: '经销协议管理',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      // .state('ba.yunyingguanli.pinpaishouquan', {
      //   url: '/yunyingguanli.pinpaishouquan',
      //   template: '<div></div>',
      //     title: '品牌授权书管理',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      // .state('ba.yunyingguanli.xingxiang', {
      //   url: '/yunyingguanli.xingxiang',
      //   template: '<div></div>',
      //     title: '形象管理',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      // .state('ba.yunyingguanli.kaohe', {
      //   url: '/yunyingguanli.kaohe',
      //   template: '<div></div>',
      //     title: '考核管理',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      // .state('ba.yunyingguanli.tuiwang', {
      //   url: '/yunyingguanli.tuiwang',
      //   template: '<div></div>',
      //     title: '退网管理',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // })
      //合作伙伴管理
      .state('ba.hezuohuoban.shejichang', {
        url: '/hezuohuoban.shejichang',
        template: '<div></div>',
          title: '设计厂商管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      .state('ba.hezuohuoban.gongyingshang', {
        url: '/hezuohuoban.gongyingshang',
        template: '<div></div>',
          title: '供应商管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      //通知模板设置
      .state('ba.tongzhimoban.duanxin', {
        url: '/tongzhimoban.duanxin',
        template: '<div></div>',
          title: '短信模板',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      })
      .state('ba.tongzhimoban.youjian', {
        url: '/tongzhimoban.youjian',
        template: '<div></div>',
          title: '邮件模板',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();
