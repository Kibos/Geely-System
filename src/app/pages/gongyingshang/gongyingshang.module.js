/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.gongyingshang', [
'BlurAdmin.pages.gongyingshang.jiandian'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider

        // .state('ba.shinfomgr', {
        //   url: '/shinfomgr',
        //   template : '<ui-view></ui-view>',
        //   title: '信息维护',
        //   sidebarMeta: {
        //     icon: 'ion-gear-a',
        //     order: 100,
        //   },
        //   data:{
        //      permissions: {
        //       only:'gongyingshang'
        //     }
        //   }
        // })
        .state('ba.shcreatemgr', {
          url: '/shcreatemgr',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: '建店管理',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
          data:{
             permissions: {
              only:'gongyingshang'
            }
          }
        });


  }

})();
