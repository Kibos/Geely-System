/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.register')
    .controller('registerCtrl', registerCtrl);

  /** @ngInject */
  function registerCtrl($state) {
    var vm = this;

    // vm.user = {
    //   email: '',
    //   password: ''
    // };
    // vm.registerFail = false;
    // vm.registerClick = registerClick;
    
    ////////////////

    // function registerClick() {
    //   Auth.register(vm.user, function (res) {
    //     console.log('log ok', res);
    //     $state.go('ba.dashboard');
    //   }, function (res) {
    //     console.log('log failed', res);
    //     vm.registerFail = true;
    //   });

    // }
  }

})();
