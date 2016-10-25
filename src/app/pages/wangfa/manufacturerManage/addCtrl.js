/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('AddCtrl', AddCtrl);

  /** @ngInject */
  function AddCtrl($scope,$state,$stateParams,$rootScope,Supplier,toastr) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    // var arguments = $stateParams.obj;
    // console.log(arguments);
      var vm = this;
      //返回管理页面
    	vm.return=function(){
    		$state.go('ba.hezuohuoban.shejichang');
    	}
      //提交
      vm.add={}
      //下拉菜单
      vm.selectItems=[
        { label: '随机生成账号', value: 1},
        { label: '联系人手机号作为账号', value: 2},
      ];
      vm.submit=function(){
      var newadd={
          name:vm.add.companyName,
          address:vm.add.companyAddress,
          password:vm.add.password,
          phone:vm.add.companyPhone,
          email:vm.add.companyEmail,
          ownName:vm.add.companyPerson
      }
      // supplier
      // $state.go('ba.hezuohuoban.shejichang');
      //   console.log(vm.add.account);

Supplier.save(newadd,function(){
toastr.success('添加成功!');
});
        // console.log(newadd);
        // $state.go('components.manufacturerManage');

    	}
    
  }
})();
