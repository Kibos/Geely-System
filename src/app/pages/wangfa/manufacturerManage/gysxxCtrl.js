/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('gysxxCtrl', gysxxCtrl);

  /** @ngInject */
  function gysxxCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    var information = $stateParams.obj;
    console.log(information.name);
    $scope.gysxx = {
      name:information.name,
      adress:information.gonguser.address,
      person:information.gonguser.ownName,
      phone:information.phone,
      time:information.createAt,
      number:information.gonguser.number
    }
    	$scope.returnBack=function(){
    		$state.go('ba.hezuohuoban.gongyingshang');
    	}


  }
})();
