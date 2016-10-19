// /**
//  * @author a.demeshko
//  * created on 1/12/16
//  */
// (function () {
//   'use strict';
//
//   angular.module('BlurAdmin.pages.wangfa.ruwangguanlisk', [])
//     .config(routeConfig);
//
//   /** @ngInject */
//   function routeConfig($stateProvider) {
//     console.log('audit');
//     $stateProvider
//       // .state('ba.rulisa.ruwangshenhe', {
//       //   url: '/audit',
//       //   controller: 'AuditCtrl',
//       //   templateUrl: 'app/pages/wangfa/audit/audit.html',
//       //     title: '入网审核',
//       //     sidebarMeta: {
//       //       icon: 'ion-ios-pulse',
//       //       order: 100,
//       //     },
//       // })
//
//       .state('ba.rulisa.ruwangshenhe.check', {
//         url: '/check',
//         controller: 'CheckCtrl',
//         templateUrl: 'app/pages/wangfa/ruwangguanli/check.html',
//         params:{
//           obj:null
//         }
//
//       })
//       .state('admin.inform', {
//         url: '/inform',
//         controller: 'InformCtrl',
//         templateUrl: 'app/pages/admin/audit/inform.html',
//         params:{
//           obj:null
//         }
//
//       })
//       .state('admin.viewDetails', {
//         url: '/viewDetails',
//         controller: 'ViewDetailsCtrl',
//         templateUrl: 'app/pages/admin/audit/viewDetails.html',
//
//       })
//       .state('admin.logoutModal', {
//         url: '/logoutModal',
//         controller: 'LogoutModalCtrl',
//         templateUrl: 'app/pages/admin/audit/logoutModal.html',
//
//       });
//   }
// })();