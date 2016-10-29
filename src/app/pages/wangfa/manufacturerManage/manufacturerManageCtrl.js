/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('ManufacturerManageCtrl', ManufacturerManageCtrl);

  /** @ngInject */
  function ManufacturerManageCtrl($scope,$state,$stateParams,$rootScope,Supplier,RoleUser,toastr) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.smartTablePageSize = 5;

    // 添加
    $scope.add=function(){
       $state.go('ba.hezuohuoban.add',{obj:2});
     };
    // 删除
    // $scope.remove=function(index){
    //   RoleUser.gongUser.delete($scope.designManufacturers[index]);
    //   $scope.designManufacturers.splice(index, 1);
    //   toastr.success('删除成功!');
    // };
    $scope.remove= function(index) {
      $scope.designManufacturers.splice(index, 1);
    };

    // 查看
    $scope.see=function(item){
      $state.go('ba.hezuohuoban.sjsxx',{obj:item});
    };

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
    			phone:'12344665689',
    			createAt:'20161010',
    			number:'10'
    		},
        {
            name:'杭州吉利4S店',
            address:'杭州市',
            ownName:'李恒',
            phone:'12344665689',
            createAt:'20161010',
            number:'10'
        },
        {
            name:'北京吉利4S店',
            address:'杭州市',
            ownName:'王璇',
            phone:'12344665689',
            createAt:'20161010',
            number:'10'
        },
        {
            name:'北京吉利4S店',
            address:'杭州市',
            ownName:'单军',
            phone:'12344665689',
            createAt:'20161010',
            number:'10'
        },
        {
            name:'北京吉利4S店',
            address:'杭州市',
            ownName:'刘健',
            phone:'12344665689',
            createAt:'20161010',
            number:'10'
        },
        {
            name:'北京吉利4S店',
            address:'杭州市',
            ownName:'金多多',
            phone:'12344665689',
            createAt:'20161010',
            number:'10'
        }
    	];


  }
})();
