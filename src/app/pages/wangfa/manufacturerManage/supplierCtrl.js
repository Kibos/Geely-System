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
    // var vm = this;
    $scope.add=function(){
    		$state.go('ba.hezuohuoban.add');
    }
    	
//     Supplier.query(function(suppliers){ 
//        $scope.suppliers=suppliers; 
//        console.log("-->"+suppliers[0].name+" "+$scope.designManufacturers);
//    });

//    Supplier.query(function(res){
//      console.log(res[0]);
  
//    }); 
   var entries =RoleUser.gongUser.query(function() {
      console.log(entries);
      $scope.suppliers=entries;
    //   console.log("si=="+suppliers.length);
  });

  $scope.viewEntry=function(id){
    		console.log(id);
  
 }
  $scope.deleteEntry=function(id){
      console.log(id);
      RoleUser.gongUser.delete({_id:id},function(){
      toastr.success('删除成功!');
    })
    }
  }
})();
