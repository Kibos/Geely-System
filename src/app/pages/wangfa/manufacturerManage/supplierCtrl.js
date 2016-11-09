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

     // 添加
    	$scope.add=function(){
    		$state.go('ba.hezuohuoban.add',{obj:1});
    	};
      // 删除
      $scope.remove=function(index){
        RoleUser.gongUser.delete($scope.suppliers[index]);
        $scope.suppliers.splice(index, 1);
        toastr.success('删除成功!');
    	};
      // 查看
      $scope.see=function(item){
    		$state.go('ba.hezuohuoban.gysxx',{obj:item});
    	};

     // 从数据库中取值
     $scope.suppliers = [];
     var entries =RoleUser.gongUser.query(function() {
        console.log("++++>>>"+entries);
        // console.log("++++>>>111"+JSON.stringify(entries));
        console.log("++++>>>222"+JSON.stringify(entries[0]));
        for (var i = 0; i < entries.length; i++) {
          $scope.suppliers[i] = entries[i]
        };
        // $scope.suppliers=entries;
        // vm.suppliers=entries;
      //   console.log("si=="+suppliers.length);
    });




  }
})();
