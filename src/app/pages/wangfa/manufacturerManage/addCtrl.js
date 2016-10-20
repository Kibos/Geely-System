/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('AddCtrl', AddCtrl);

  /** @ngInject */
  function AddCtrl($scope,$state,$stateParams,$rootScope) {
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
          companyName:vm.add.companyName,
          companyAddress:vm.add.companyAddress,
          companyPerson:vm.add.companyPerson,
          companyPhone:vm.add.companyPhone,
          companyEmail:vm.add.companyEmail,
          account:vm.add.account
      }
      $state.go('ba.hezuohuoban.shejichang');
        console.log(vm.add.account);
        console.log(vm.standardSelected)
        console.log(newadd);
        // $state.go('components.manufacturerManage');

    	}
    
  }
})();
