/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('AddCtrl', AddCtrl);

  /** @ngInject */
  function AddCtrl($scope,$state,$stateParams,$rootScope,Supplier,toastr,RoleUser) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;

    var vm = this;
    vm.adds={};
    // var information = $stateParams.obj;
    //  console.log('-------------'+information);
    vm.submit = function(){

       var newadd={
           name:vm.adds.companyName,
           password:vm.adds.password||"123456",
           email:vm.adds.companyEmail,
           address:vm.adds.companyAddress,
           cellphone:vm.adds.companyPhone,
           contacts:vm.adds.companyPerson,
           casenum:vm.adds.casenum
       };
       Supplier.add.save(newadd,function(res){
          console.log('-------------'+res);
          toastr.success('添加成功!');
          $state.go('ba.hezuohuoban.gongyingshang');
         }
       );

     };


      //返回管理页面
      vm.return=function(){
      		$state.go('ba.hezuohuoban.gongyingshang');
      };

  }

})();
