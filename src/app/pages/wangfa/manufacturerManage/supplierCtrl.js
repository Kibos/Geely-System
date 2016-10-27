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
  }
})();
