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
    vm.return=function(){
    		$state.go('ba.hezuohuoban.gongyingshang');
    };
    vm.add={};
    
   
    vm.submit=function(){
      var newadd={
          name:vm.add.companyName,
         
          password:vm.add.password||"123456",
          phone:vm.add.companyPhone,
          email:vm.add.companyEmail,
          role:"gonguser",
          gonguser:{ownName:vm.add.companyPerson, address:vm.add.companyAddress}
      }


      if(isUndefinedOrNull(newadd.name)||isUndefinedOrNull(newadd.gonguser.address)||isUndefinedOrNull(newadd.phone)||
        isUndefinedOrNull(newadd.email)||isUndefinedOrNull(newadd.gonguser.ownName)){
        toastr.warning('请填写完整!', '提示');
      }else{
          // Supplier.save(newadd,function(){
          //  toastr.success('添加成功!');
          // });

          RoleUser.gongUser.save(newadd,function(){
           toastr.success('添加成功!');
          });
      	$state.go('ba.hezuohuoban.gongyingshang');
          //  vm.add={};
      }
    }

    function isUndefinedOrNull(value){
       return angular.isUndefined(value) || value === null
    };

    
  }
})();
