/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.register')
    .controller('registerCtrl', registerCtrl);

  /** @ngInject */
  function registerCtrl($state,Auth,toastr) {
    var vm = this;
    console.log('res====ctroll')

    vm.user = {
      email: '',
      password: '',
      name:'',
      cellphone:''
    };
    vm.registerFail = false;
    vm.registerClick = registerClick;

    vm.showSuccessMsg= showSuccessMsg;
    vm.showInfoMsg=showInfoMsg;
    vm.showErrorMsg=showErrorMsg;
    vm.showWarningMsg=showWarningMsg;
    
    ////////////////

    function registerClick() {
        Auth.createUser(vm.user)
        .then( function() {
          console.log('logined');
          showSuccessMsg();
          $state.go('login');
          showInfoMsg();
        })
        .catch( function(err) {
        console.log('log failed', err);
     if(vm.user.email+""===""||vm.user.password+""===""||vm.user.name+""===""||vm.user.cellphone+""===""){
            showWarningMsg();
          }else{
            showErrorMsg(err.message);
          }
        vm.registerFail = true;
        });
    }

    function showSuccessMsg() {
      toastr.success('注册成功!');
    };

    function showInfoMsg() {
      toastr.info("请先登录!", '提示');
    };

    function showErrorMsg(mgs) {
      toastr.error("注册失败", '错误');
    };
    
    function showWarningMsg() {
      toastr.warning('请填写完整!', '提示');
    };
  
  }
    

})();
