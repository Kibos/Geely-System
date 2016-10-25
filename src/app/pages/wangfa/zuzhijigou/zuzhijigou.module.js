// /**
//  * @author a.demeshko
//  * created on 1/12/16
//  */
// (function () {
//   'use strict';

//   angular.module('BlurAdmin.pages.wangfa.zuzhijigou', [])
//     .config(routeConfig);

//   /** @ngInject */
//   function routeConfig($stateProvider){
//     // $stateProvider
      
//     //     .state('ba.addTemplate', {
//     //       url: '/hezuohuoban',
//     //       controller: 'addTemplateCtrl',
//     //       templateUrl: 'app/pages/wangfa/zuzhijigou/addTemplate.html',
//     //       sidebarMeta: {
//     //         icon: 'ion-gear-a',
//     //         order: 100,
//     //       },
//     //        data:{
//     //          permissions: {
//     //           only:'wangfa'
//     //        }
//     //       }
//     //     });
       
//   }
// })();



/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.zuzhijigou', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider){
    $stateProvider
       .state('ba.addTemplate', {
        url: '/addTemplate',
        controller: 'addTemplateCtrl',
        templateUrl: 'app/pages/wangfa/zuzhijigou/addTemplate.html',
          data:{
             permissions: {
              only:'wangfa'
            }
          }
      })
       .state('ba.details', {
        url: '/details',
        controller: 'detailsCtrl',
        templateUrl: 'app/pages/wangfa/zuzhijigou/details.html',
        params:{    
           obj:null   
        },
          data:{
             permissions: {
              only:'wangfa'
            }
          }
          
      })
       .state('ba.bjxx', {
        url: '/bjxx',
        controller: 'bjxxCtrl',
        templateUrl: 'app/pages/wangfa/zuzhijigou/bjxx.html',
        params:{    
           obj:null   
        },
          data:{
             permissions: {
              only:'wangfa'
            }
          }
          
      });
      
  }
})();