/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.zuzhijigou')
      .controller('detailsCtrl', detailsCtrl);

  /** @ngInject */
  function detailsCtrl($scope,$state,$stateParams,$rootScope,$uibModal) {
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
     
      
    
  }
})();
