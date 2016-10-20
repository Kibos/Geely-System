/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.rectificationsq')
      .controller('leadercheckCtrl', leadercheckCtrl);

  /** @ngInject */
  function leadercheckCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
  	var vm = this;
    vm.partners = '杭州吉利4S店';
    vm.information = '同意';
    vm.oldinformation = '不同意';
    vm.selectItems=[
    	{ label:'同意',value: 1},
    	{ label:'不同意',value: 2}
    ]
    vm.check = {};
    vm.submit = function () {
    	var newcheck = {
    		result:vm.check.result,
    		opinion:vm.check.opinion
    	}
    	console.log(newcheck);
    }
  }
})();
