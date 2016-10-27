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
<<<<<<< HEAD
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
=======
>>>>>>> 3db7327f9ad5fb55db702ef96ee378bf75fa33bb

    // var vm = this;
    $scope.add=function(){
    		$state.go('ba.hezuohuoban.addgycs');
    }


   var entries =RoleUser.gongUser.query(function() {
      console.log(entries);
      $scope.suppliers=entries;
    //   console.log("si=="+suppliers.length);
  });
  }
})();
