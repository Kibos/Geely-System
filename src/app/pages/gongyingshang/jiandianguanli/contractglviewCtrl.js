/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.gongyingshang.jiandian')
      .controller('contractglviewCtrl', contractglviewCtrl);

  /** @ngInject */
  function contractglviewCtrl($scope,$stateParams,Auth) {

  var information = $stateParams.obj;
  $scope.partners=information;
  

    /*合同供货流程 步骤状态*/
    //ng-repeat
    $scope.process = [
    {nums:'1',steps:'合同上传',states:' 合同已上传备案 ',bool:true},
    {nums:'2',steps:'首付款凭证',states:' 首付款凭证已上传 ',bool:true},
    {nums:'3',steps:'供货商发货',states:'供 应 商 已 发 货',bool:true},
    {nums:'4',steps:'供货商到货确认',states:'供应商已完成到货确认',bool:false},
  ];
  //最后一个步骤
    $scope.last = {
      num:'5',steps:'供货商安装完成确认',states:'供应商已完成安装确认',bool:false
    };


  }
})();
