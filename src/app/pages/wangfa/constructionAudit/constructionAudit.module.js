/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.constructionAudit', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
      .state('ba.jiandianguanli.shigongguanli', {
        url: '/constructionAudit',
        controller: 'ConstructionAuditCtrl',
        templateUrl: 'app/pages/wangfa/constructionAudit/constructionAudit.html',
          title: '施工管理',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 2,
          },
      })
      .state('ba.jiandianguanli.constructionStage', {
        url: '/constructionStage',
        controller: 'ConstructionStageCtrl',
        templateUrl: 'app/pages/wangfa/constructionAudit/constructionStage.html',
        params:{
          obj:null
        }, 
        data:{
             permissions: {
              only:'wangfa'
            }
          } 
      })
      .state('ba.jiandianguanli.addConstructionPhase', {
        url: '/addConstructionPhase',
        controller: 'AddConstructionPhaseCtrl',
        templateUrl: 'app/pages/wangfa/constructionAudit/addConstructionPhase.html',
        params:{
          obj:null
        },  
        data:{
             permissions: {
              only:'wangfa'
            }
          }
      })
      .state('ba.jiandianguanli.jddzbj', {
        url: '/jddzbj',
        controller: 'jddzbjCtrl',
        templateUrl: 'app/pages/wangfa/constructionAudit/jddzbj.html',
        params:{
          obj:null
        },  
        data:{
             permissions: {
              only:'wangfa'
            }
          }
      })
  }
})();