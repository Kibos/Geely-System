/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.acceptancegl')
      .controller('acceptanceglCtrl', acceptanceglCtrl);

  /** @ngInject */
  function acceptanceglCtrl($scope,RoleUser,$rootScope,$state) {
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
        status:'待安排验收'
      },
      {
        name:'上海华庭',
        type:'A级4S店',
        address:'东区-上海市嘉定区',
        status:'待安排验收'
      },
      {
        name:'苏州汽工贸',
        type:'A级4S店',
        address:'东区-浙江省杭州市',
        status:'待提交整改申请'
      },
      {
        name:'苏州汽工贸',
        type:'A级4S店',
        address:'江苏省苏州市',
        status:'待提交整改申请'
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
       }else if(item.status==='待安排验收')
       {
         $state.go('ba.jiandianguanli.acceptanceglcheck',{obj:item});
        console.log("待安排验收");
      }else if(item.status==='待提交整改申请'){
        console.log("待提交整改申请");
      }else if(item.status==='已完成验收'){
       console.log("已完成验收");
       }
 };


  }
})();
