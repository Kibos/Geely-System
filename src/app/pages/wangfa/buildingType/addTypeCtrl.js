/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.buildingType')
      .controller('AddTypeCtrl', AddTypeCtrl);

  /** @ngInject */
  function AddTypeCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.return=function () {
      console.log("返回");
      $state.go('ba.jiandianleixingweihu');
      // body...add.typeWidth
    }
    //增加建店类型表单
    $scope.add = {}
    $scope.subdata = function () {
      $state.go('ba.jiandianleixingweihu');
      
      var newType = {
        typeName:$scope.add.typeName,
        typeWidth:$scope.add.typeWidth,
        typeHeight:$scope.add.typeHeight,
        acreage:$scope.add.acreage,
        minCarNum:$scope.add.minCarNum,
        minWorkstation:$scope.add.minWorkstation,
        state:$scope.add.state
      }

      console.log(newType);
    }
  }
})();
