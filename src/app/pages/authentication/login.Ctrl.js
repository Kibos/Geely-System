/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.login')
    .controller('loginCtrl', loginCtrl);

  /** @ngInject */
  function loginCtrl($state, Auth,toastr,$rootScope) {
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };

    vm.loginFail = false;
    vm.loginClick = loginClick;
    vm.registerClick=registerClick;

    vm.showSuccessMsg= showSuccessMsg;
    vm.showInfoMsg=showInfoMsg;
    vm.showErrorMsg=showErrorMsg;
    vm.showWarningMsg=showWarningMsg;

    ////////////////

    function loginClick() {
      Auth.login(vm.user)
      .then( function(res) {
          // Logged in, redirect to the page with requested a login
        console.log('log ok', res);
        showSuccessMsg();
        $state.go('ba.dashboard');
        })
        .catch( function(err) {
            console.log('log failed', err);
          if(isUndefinedOrNull(vm.user.email)||isUndefinedOrNull(vm.user.password)){
            showWarningMsg();
          }else{
            showErrorMsg(err.message);
          }

           vm.loginFail = true;
        });
    }

    function registerClick() {
        $state.go('register');
    }

    function showSuccessMsg() {
      toastr.success('欢迎使用本系统!');
    };

    function showInfoMsg() {
      toastr.info("You've got a new email!", 'Information');
    };

    function showErrorMsg(mgs) {
      toastr.error("登录失败", '错误');
    };

    function showWarningMsg() {
      toastr.warning('请填写完整!', '提示');
    };

    function isUndefinedOrNull(value){
       return angular.isUndefined(value) || value === null};
    }






})();
