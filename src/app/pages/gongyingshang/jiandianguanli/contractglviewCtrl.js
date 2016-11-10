/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.gongyingshang.jiandian')
      .controller('contractglviewCtrl', contractglviewCtrl);

  /** @ngInject */
  function contractglviewCtrl($scope,$stateParams,RoleUser,Auth,toastr,filesUrl) {

    //合同供货流程 步骤状态
    //ng-repeat 初始值
    $scope.process = [
    {nums:'1',steps:'合同上传',states:' 合同已上传备案 ',bool:false},
    {nums:'2',steps:'首付款凭证',states:' 首付款凭证已上传 ',bool:false},
    {nums:'3',steps:'供货商发货',states:'供 应 商 已 发 货',bool:false},
    {nums:'4',steps:'供货商到货确认',states:'供应商已完成到货确认',bool:false},
  ];
    //最后一个步骤
    $scope.last = {
      num:'5',steps:'供货商安装完成确认',states:'供应商已完成安装确认',bool:false
    };

  //接收从contractgl界面传过来的相对应的代理商的数据
  var information = $stateParams.obj;
  $scope.applicant=information;

  //打印状态
  $scope.applicant.status = information.status;
  console.log("++++>>>000"+$scope.applicant.status);
  //根据传过来的代理商的状态，判断流程的步骤
  if ($scope.applicant.status==='待上传合同') {
      // $scope.process[0].bool=true;
  }else if ($scope.applicant.status==='待首付款确认') {
      $scope.process[0].bool=true;

  }else if ($scope.applicant.status==='待发货') {
      $scope.process[0].bool=true;
      $scope.process[1].bool=true;

  }else if ($scope.applicant.status==='待确认签收') {
      $scope.process[0].bool=true;
      $scope.process[1].bool=true;
      $scope.process[2].bool=true;

  }else if ($scope.applicant.status==='待确认安装完成') {
      $scope.process[0].bool=true;
      $scope.process[1].bool=true;
      $scope.process[2].bool=true;
      $scope.process[3].bool=true;

  }else if($scope.applicant.status==='已结束'){
      $scope.process[0].bool=true;
      $scope.process[1].bool=true;
      $scope.process[2].bool=true;
      $scope.process[3].bool=true;
      $scope.last.bool=true;

  };


  //获取当前供应商的信息  并在供应商概览中显示
  var info=Auth.getCurrentUser();
  console.log("sxx"+info);
  console.log("++++>>>111"+JSON.stringify(info,null, "\t"));
  $scope.supplier = info;


  }
})();
