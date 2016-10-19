/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.constructionAudit')
      .controller('ConstructionAuditCtrl', ConstructionAuditCtrl);

  /** @ngInject */
  function ConstructionAuditCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    var id = $stateParams.obj;
    console.log('id');
    console.log(id)

    $scope.submit=function(){
      $state.go('ba.jiandianguanli.audit');
    }
    $scope.cancel=function(){
      $state.go('ba.jiandianguanli.audit');
    }
    $scope.applicants=[
      {
        id:1,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工阶段待添加',
        date:'20161006',
      },
      {
        id:2,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工阶段待添加',
        date:'20161006',
      },
      {
        id:1,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工阶段待添加',
        date:'20161006',
      },
      {
        id:3,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工阶段待添加',
        date:'20161006',
      },
      {
        id:1,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工阶段待添加',
        date:'20161006',
      },
      {
        id:4,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工阶段待添加',
        date:'20161006',
      },
      {
        id:5,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工阶段待添加',
        date:'20161006',
      }

    ]

    $scope.applicants2=[
      {
        id:1,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工进行中',
        date:'20161006',
      },
      {
        id:2,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工进行中',
        date:'20161006',
      },
      {
        id:1,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工进行中',
        date:'20161006',
      },
      {
        id:3,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工进行中',
        date:'20161006',
      },
      {
        id:1,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工进行中',
        date:'20161006',
      },
      {
        id:4,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工进行中',
        date:'20161006',
      },
      {
        id:5,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工进行中',
        date:'20161006',
      }

    ]

    $scope.applicants3=[
      {
        id:5,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工已完成',
        date:'20161006'
       
      },
      {
        id:1,
        area:'北京',
        company:'维擎科技',
        person:'黎明',
        phone:'123456789',
        state:'施工已完成',
        date:'20161006'
       
      }
      ]

  }
})();
