/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.zuzhijigou')
      .controller('bjxxCtrl', bjxxCtrl);

  /** @ngInject */
  function bjxxCtrl($scope,$state,$stateParams,$rootScope,$uibModal) {
    var information = $stateParams.obj;
    console.log(information);
    $scope.details = {
      number:information.number,
      name:information.name,
      type:information.type,
      area:information.area,
      status:information.status

    }

      $scope.returnBack = function(){
        $state.go('ba.zuzhijigou');
      }
      $scope.save = function(){
        var newdetails = {
          number:$scope.details.number,
          name:$scope.details.name,
          type:$scope.details.type,
          area:$scope.details.area,
          status:$scope.details.status

        }
        console.log(newdetails);
        $state.go('ba.zuzhijigou');
      }
     
      
    
  }
})();
