/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('supplierCtrl', supplierCtrl);

  /** @ngInject */
  function supplierCtrl($scope,$state,$stateParams,$rootScope,Supplier) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    	$scope.add=function(){
    		$state.go('ba.hezuohuoban.add',{obj:2});
    	}
    	
    	$scope.suppliers=[
    		{
                name:'杭州吉利公司',
                address:'杭州市',
                person:'张三',
                phone:'12344665689',
                time:'20161010',
                number:'10'
            },
            {
                name:'杭州吉利4S店',
                address:'杭州市',
                person:'张三',
                phone:'12344665689',
                time:'20161010',
                number:'10'
            },
             {
                name:'杭州吉利4S店',
                address:'杭州市',
                person:'张三',
                phone:'12344665689',
                time:'20161010',
                number:'10'
            },
             {
                name:'杭州吉利4S店',
                address:'杭州市',
                person:'张三',
                phone:'12344665689',
                time:'20161010',
                number:'10'
            },
             {
                name:'杭州吉利4S店',
                address:'杭州市',
                person:'张三',
                phone:'12344665689',
                time:'20161010',
                number:'10'
            },
            {
                name:'杭州吉利4S店',
                address:'杭州市',
                person:'张三',
                phone:'12344665689',
                time:'20161010',
                number:'10'
            }
    			
    	];

var entries =Supplier.query(function() {
    console.log(entries);
  }); //query() 返回有的entry
        // console.log();
  }
})();
