/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('supplierCtrl', supplierCtrl);

  /** @ngInject */
  function supplierCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    	$scope.add=function(){
    		$state.go('ba.hezuohuoban.add');
    	}
    	$scope.designManufacturers=[
    		{
    			name:'A公司',
    			address:'杭州市',
    			person:'张三',
    			phone:'12344665689',
    			time:'20161010',
    			number:'10'
    		}
    	]
    	$scope.suppliers=[
    		{
    			name:'A公司',
    			address:'杭州市',
    			person:'张三',
    			phone:'12344665689',
    			time:'20161010',
    			number:'10'
    		}
    			
    	]
  }
})();
