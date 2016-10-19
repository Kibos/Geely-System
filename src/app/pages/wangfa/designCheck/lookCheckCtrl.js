/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.designCheck')
      .controller('LookCheckCtrl', LookCheckCtrl);

  /** @ngInject */
  function LookCheckCtrl($scope,$state,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.showflag=false;
    $scope.change=function(){
        $scope.showflag=!$scope.showflag;
    }
    $scope.returnList = function(){
      $state.go('ba.jiandianguanli.designCheck');
    }
    //代理商信息
     $scope.partners=
      {
        id:1,
        compony:'北京xx',
        name:'汽车',
        place:'北京',
        type:'旗舰店',
        person:'黎明',
        phone:'13235556556',
        email:'1213444@qq.com'
      }
    //审核日志
     $scope.checkLog=[
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

     ]
     //设计商信息
      $scope.design = {
        companyName:'杭州',
        person:'liming',
        successNum:'2',
        phone:'12345666',
        opinion:'1XXXXXXXXXXXXXXX'
      }
  }
})();
