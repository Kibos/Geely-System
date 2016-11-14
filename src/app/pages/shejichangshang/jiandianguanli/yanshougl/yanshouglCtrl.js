/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.shejichangshang.jiandianguanliss')
      .controller('yanshouglCtrl', yanshouglCtrl);

  /** @ngInject */
  function yanshouglCtrl($scope,$state,RoleUser,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.smartTablePageSize = 5;

    $scope.acceptancelists=[
      {
        name:'杭州远景',
        type:'城市展厅',
        address:'东区-浙江省杭州市',
        status:'待提交申请'
      },
      {
        name:'杭州远景',
        type:'城市展厅',
        address:'东区-上海市嘉定区',
        status:'待提交申请'
      },
      {
        name:'上海华庭',
        type:'A级4S店',
        address:'东区-江苏省苏州市',
        status:'待审核'
      },
      {
        name:'上海别墅华泰',
        type:'A级4S店',
        address:'东区-上海市嘉定区',
        status:'待审核'
      },
      {
        name:'苏州汽工贸',
        type:'A级4S店',
        address:'东区-浙江省杭州市',
        status:'已审核'
      },
      {
        name:'苏州汽工贸',
        type:'A级4S店',
        address:'江苏省苏州市',
        status:'已审核'
      },
      {
        name:'苏州汽工贸',
        type:'A级4S店',
        address:'东区-浙江省杭州市',
        status:'待提交申请'
      }

    ];

    $scope.xq = function(item){
       if(item.status==='待提交申请'){
        console.log("待提交验收申请");
         // $state.go('ba.jiandianguanli.buildstorebtdetail',{obj:item});
       }else if(item.status==='待审核')
       {
         $state.go('ba.jdgli.yanshouglCheck',{obj:item});
        console.log("待审核");
      }else if(item.status==='已审核'){
        console.log("已审核");
      }
 };


  }
})();
