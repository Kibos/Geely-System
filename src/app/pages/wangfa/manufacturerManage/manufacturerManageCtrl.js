/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('ManufacturerManageCtrl', ManufacturerManageCtrl);

  /** @ngInject */
  function ManufacturerManageCtrl($scope,$state,$stateParams,$rootScope,Supplier) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.add=function(){
    	$state.go('ba.hezuohuoban.add',{obj:1});
    };
   
    	
  }
})();
