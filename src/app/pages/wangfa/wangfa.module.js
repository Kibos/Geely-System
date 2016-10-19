/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa', [
    'BlurAdmin.pages.wangfa.ruwangguanlisk',

    'BlurAdmin.pages.wangfa.designCheck',
    'BlurAdmin.pages.wangfa.constructionAudit',
    'BlurAdmin.pages.wangfa.acceptancegl'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider

        .state('ba.rulisa', {
          url: '/rulisa',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: '入网管理',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 10,
          },
          data:{
             permissions: {
              only:'wangfa'
            }
          }
        })
         .state('ba.jiandianguanli', {
          url: '/jiandianguanli',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: '建店管理',
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
        // .state('ba.mianshiguanli', {
        //   url: '/mianshiguanli',
        //   template : '<ui-view></ui-view>',
        //   abstract: true,
        //   title: '面试管理',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //    data:{
        //      permissions: {
        //       only:'wangfa'
        //    }
        //   }
        // })
        // .state('ba.peixunguanli', {
        //   url: '/peixunguanli',
        //   template : '<ui-view></ui-view>',
        //   abstract: true,
        //   title: '培训管理',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //    data:{
        //      permissions: {
        //       only:'wangfa'
        //    }
        //   }
        // })
        // .state('ba.yunyingguanli', {
        //   url: '/yunyingguanli',
        //   template : '<ui-view></ui-view>',
        //   abstract: true,
        //   title: '运营管理',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //    data:{
        //      permissions: {
        //       only:'wangfa'
        //    }
        //   }
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
        // .state('ba.tongzhimoban', {
        //   url: '/tongzhimoban',
        //   template : '<ui-view></ui-view>',
        //   abstract: true,
        //   title: '通知模板设置',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //    data:{
        //      permissions: {
        //       only:'wangfa'
        //    }
        //   }
        // })
        .state('ba.jiandianleixingweihu', {
          url: '/jiandianleixingweihu',
          template : '<ui-view></ui-view>',

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
        // .state('ba.zuzhijigou', {
        //   url: '/zuzhijigou',
        //   template : '<ui-view></ui-view>',

        //   title: '组织机构模板维护 ',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //   data:{
        //      permissions: {
        //       only:'wangfa'
        //    }
        //   }
        // })
        ;


  }

})();
