/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.shejichangshang.jiandianguanliss')
      .controller('designfinalCtrl', designfinalCtrl);

  /** @ngInject */
  function designfinalCtrl($scope,$stateParams,$state) {
    var information = $stateParams.obj;
    console.log(information);
    /** 代理商概览*/
    $scope.partners=
        {
          id:information.id,
          compony:information.company,
          name:'汽车',
          place:'北京',
          type:'旗舰店',
          person:information.person,
          phone:information.phone,
          email:'1213444@qq.com'
        };

    /** 初稿 firstcheckLog*/
    $scope.firstshowflag=false;
    $scope.firstChange=function(){
        $scope.firstshowflag=!$scope.firstshowflag;
    };
    $scope.firstcheckLog=[
         {
           date:'20161008',
           person:'黎明',
           x:'业务部门审核通过',
           result:'市场部 张经理审核通过'
         },
         {
           date:'20161008',
           person:'黎明',
           x:'业务部门审核通过',
           result:'市场部 张经理审核通过'
         },
         {
           date:'20161008',
           person:'黎明',
           x:'业务部门审核通过',
           result:'市场部 张经理审核通过'
         }

      ];

      /** 终稿 finalcheckLog*/
      $scope.finalshowflag=false;
      $scope.finalChange=function(){
          $scope.finalshowflag=!$scope.finalshowflag;
      };
      $scope.finalcheckLog=[
           {
             date:'20161008',
             person:'黎明',
             x:'业务部门审核通过',
             result:'市场部 张经理审核通过'
           },
           {
             date:'20161008',
             person:'黎明',
             x:'业务部门审核通过',
             result:'市场部 张经理审核通过'
           },
           {
             date:'20161008',
             person:'黎明',
             x:'业务部门审核通过',
             result:'市场部 张经理审核通过'
           }

        ];

        /** 提交审核*/
        $scope.submit=function(){
            console.log('提交审核');
        };
        $scope.cancel = function(){
          $state.go("ba.jdgli.design");
        }

  }
})();
