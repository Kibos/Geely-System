/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.acceptancegl')
      .controller('submitreportCtrl', submitreportCtrl);

  /** @ngInject */
  function submitreportCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;

    var vm = this;
    vm.partners='杭州吉利4S店';
    vm.information = '杭州吉利4S店';
    vm.oldinformation = '杭州吉利4S店';
    vm.selectItems=[
        { label:'通过',value: 1},
        { label:'不通过',value: 2}
    ];
    vm.check = {};
    vm.submit=function () {
      var newcheck =  {
          result:vm.check.result,
          file:vm.check.file
      }
      console.log(vm.check.result);
      $state.go('ba.leadercheck');
      // body...
    }



  }
})();
