/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.register')
    .controller('registerCtrl', registerCtrl);

  /** @ngInject */
  function registerCtrl($state,Auth) {
    var vm = this;
    console.log('res====ctroll')

    vm.user = {
      email: '',
      password: '',
      name:''
    };
    vm.registerFail = false;
    vm.registerClick = registerClick;
    
    ////////////////

    function registerClick() {
      // Auth.register(vm.user, function (res) {
      //   console.log('log ok', res);
      //   $state.go('ba.dashboard');
      // }, function (res) {
      //   console.log('log failed', res);
      //   vm.registerFail = true;
      // });

        Auth.createUser(vm.user)
        .then( function() {
          console.log('logined');
          $state.go('login');
        })
        .catch( function(err) {
                console.log('log failed', err);
        vm.registerFail = true;
        });

    }
  }

})();
