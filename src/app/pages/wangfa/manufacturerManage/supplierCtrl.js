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
<<<<<<< HEAD
    $scope.smartTablePageSize = 5;
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;

    	$scope.add=function(){
    		$state.go('ba.hezuohuoban.add',{obj:2});
    	};


   var entries =RoleUser.gongUser.query(function() {
      console.log(entries);
      $scope.suppliers=entries;
      



    //   console.log("si=="+suppliers.length);
  });
=======
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;

     // 添加
    	$scope.add=function(){
    		$state.go('ba.hezuohuoban.add',{obj:2});
    	};
      // 删除
      $scope.remove=function(index){
        $scope.suppliers.splice(index, 1);
    	};
      // 查看
      $scope.see=function(item){
    		$state.go('ba.hezuohuoban.gysxx',{obj:item});
        // console.log();
    	};

     // 从数据库中取值
     var entries =RoleUser.gongUser.query(function() {
        console.log("++++>>>"+entries);
        $scope.supplier=entries;
        // vm.suppliers=entries;
      //   console.log("si=="+suppliers.length);
    });
>>>>>>> ca77ec99a1025a72afa99e2fec3575dfc61010cb
  }
})();
