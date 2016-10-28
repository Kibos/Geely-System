/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('ManufacturerManageCtrl', ManufacturerManageCtrl);

  /** @ngInject */
  function ManufacturerManageCtrl($scope,$state,$stateParams,$rootScope,Supplier,RoleUser) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;


    $scope.add=function(){
    		$state.go('ba.hezuohuoban.add',{obj:1});
    }

//         var entries =RoleUser.gongUser.query(function() {
//          console.log(entries);
//           $scope.designManufacturers=entries;
//     //   console.log("si=="+suppliers.length);
//   });

    	$scope.designManufacturers=[
    		{
    			name:'A公司',
    			address:'杭州市',
          ownName:'张恒',
    			person:'张三',
    			phone:'12344665689',
    			createAt:'20161010',
    			number:'10'
    		},
        {
            name:'杭州吉利4S店',
            address:'杭州市',
            ownName:'李恒',
            person:'张三',
            phone:'12344665689',
            createAt:'20161010',
            number:'10'
        },
        {
            name:'北京吉利4S店',
            address:'杭州市',
            ownName:'王璇',
            person:'张三',
            phone:'12344665689',
            createAt:'20161010',
            number:'10'
        },
        {
            name:'北京吉利4S店',
            address:'杭州市',
            ownName:'单军',
            person:'张三',
            phone:'12344665689',
            createAt:'20161010',
            number:'10'
        },
        {
            name:'北京吉利4S店',
            address:'杭州市',
            ownName:'刘健',
            person:'张三',
            phone:'12344665689',
            createAt:'20161010',
            number:'10'
        },
        {
            name:'北京吉利4S店',
            address:'杭州市',
            ownName:'金多多',
            person:'张三',
            phone:'12344665689',
            createAt:'20161010',
            number:'10'
        }
    	]
  }
})();
