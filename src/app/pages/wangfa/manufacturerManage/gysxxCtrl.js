/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('gysxxCtrl', gysxxCtrl);

  /** @ngInject */
  function gysxxCtrl($scope,$state,$stateParams,$rootScope,RoleUser,toastr,Supplier) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;

    //复制一份，取消时用
    var info =angular.copy($stateParams.obj);
    console.log("----->>>"+JSON.stringify(info));
    //接收从上一页面传过来的数据
    $scope.gysxx = $stateParams.obj;


     $scope.flag = true;
     //编辑
     $scope.editClick = function(){
       $scope.flag = !$scope.flag;
      //  $scope.isActive = false;
     };
     //取消
     $scope.cancelClick = function(){
       $scope.flag = !$scope.flag;
       $scope.gysxx = info;
     };
     //保存      数据更新
     $scope.saveClick = function(){
       $scope.flag = !$scope.flag;
       console.log("更新后的供应商信息"+JSON.stringify($scope.gysxx));
       Supplier.update.save({id:$scope.gysxx.id},$scope.gysxx,function(response){
          toastr.success('更新成功!');
       });

     };

    //返回供应商管理页面
    $scope.returnBack=function(){
      $state.go('ba.hezuohuoban.gongyingshang');
    };


  }
})();
