/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.shejichangshang', [
     'BlurAdmin.pages.shejichangshang.jiandianguanliss'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ba.jdgli', {
          url: '/jdgli',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: '建店管理',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
           data:{
             permissions: {
              only:'shejichangshang'
            }
          }
        });


  }

})();
