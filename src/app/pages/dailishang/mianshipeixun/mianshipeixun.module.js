/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang,mianshi', [
      
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider

        .state('ba.mianshi.mianshiguanli', {
          url: '/mianshi.mianshiguanli',
          template : '<ui-view></ui-view>',
          title: '面试管理',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        })
        .state('ba.mianshi.peixunjihua', {
          url: '/mianshi.peixunjihua',
          template : '<ui-view></ui-view>',
          title: '培训计划',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        })
        .state('ba.mianshi.peixunguanli', {
          url: '/mianshi.peixunguanli',
          template : '<ui-view></ui-view>',
          title: '培训管理',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        });
        
        

  }

})();
