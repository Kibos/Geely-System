/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.login')
    .controller('loginCtrl', loginCtrl);

  /** @ngInject */
  function loginCtrl($state, Auth) {
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };
    vm.loginFail = false;
    vm.loginClick = loginClick;
    vm.registerClick=registerClick;
    
    ////////////////

    function loginClick() {
      Auth.login(vm.user)
      .then( function(res) {
          // Logged in, redirect to the page with requested a login
        console.log('log ok', res);
        $state.go('ba.dashboard');
        })
        .catch( function(err) {
           console.log('log failed', err);
           vm.loginFail = true;
        });
      
      //  function (res) {
      //   console.log('log ok', res);
      //   $state.go('ba.dashboard');
      // }, function (res) {
      //   console.log('log failed', res);
      //   vm.loginFail = true;
      // });

    }


    function registerClick() {
        $state.go('register');

    }



  }

})();
