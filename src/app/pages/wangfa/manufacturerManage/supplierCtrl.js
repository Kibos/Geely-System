/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('supplierCtrl', supplierCtrl);

  /** @ngInject */
  function supplierCtrl($scope,$state,$stateParams,$rootScope,RoleUser,toastr,Supplier) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.smartTablePageSize = 5;


    // 从数据库中取值
    $scope.suppliers = [];
    $scope.suppliers_data = [];
    function getList() {
         Supplier.get({},function(entries) {
             $scope.suppliers_data = entries.data;
         });
       };
       getList();

    // 添加
  	$scope.add=function(){
  		$state.go('ba.hezuohuoban.add',{obj:1});
  	};

    // 删除
    $scope.del= function(id) {
      Supplier.delete.remove({id:parseInt(id)},function(res){
         console.log(res)
         getList();

      })
    };

    // 查看
    $scope.see=function(item){
  		$state.go('ba.hezuohuoban.gysxx',{obj:item});
  	};


  }
})();
