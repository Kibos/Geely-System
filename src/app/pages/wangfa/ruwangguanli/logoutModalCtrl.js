/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.ruwangguanlisk')
      .controller('LogoutModalCtrl', LogoutModalCtrl);

  /** @ngInject */
  function LogoutModalCtrl($scope,$state,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.logout=function(){
    	$state.go('components.viewDetails');
    }
  }
})();
