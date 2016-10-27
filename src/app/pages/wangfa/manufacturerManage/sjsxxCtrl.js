/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('sjsxxCtrl', sjsxxCtrl);

  /** @ngInject */
  function sjsxxCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    var information = $stateParams.obj;
    console.log(information.name);
    $scope.sjsxx = {
      name:information.name,
      adress:information.address,
      person:information.person,
      phone:information.phone,
      time:information.time,
      number:information.number
    }
    	$scope.returnBack=function(){
    		$state.go('ba.hezuohuoban.shejichang');
    	}


  }
})();
