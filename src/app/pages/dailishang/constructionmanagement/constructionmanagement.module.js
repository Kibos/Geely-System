/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.constructionmanagement', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      // .state('components.constructionmanagement', {
      //   url: '/constructionmanagement',
      //   controller: 'constructionmanagementCtrl',
      //   templateUrl: 'app/pages/components/constructionmanagement/constructionmanagement.html',
      //     title: '施工管理',
      //     sidebarMeta: {
      //       icon: 'ion-ios-pulse',
      //       order: 100,
      //     },
      // });
  }
})();
