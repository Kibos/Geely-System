/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.profile',
    'BlurAdmin.pages.permission',
    'BlurAdmin.pages.login',
    'BlurAdmin.pages.register',

    'BlurAdmin.pages.dailishang',
    'BlurAdmin.pages.gongyingshang',
    'BlurAdmin.pages.shejichangshang',
    'BlurAdmin.pages.wangfa'
 

  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, $stateProvider, baSidebarServiceProvider) {
    $stateProvider.state('ba', {
            abstract: true,
            views: {
              'fullWindow': {
                templateUrl: 'panel-layout.html'
              }
              /*controller: 'DefaultLayoutController',
              controllerAs: 'layoutController'*/
            }
    });

  //  $urlRouterProvider.otherwise('/register');
   $urlRouterProvider.otherwise('/login');
    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });
  }

})();
