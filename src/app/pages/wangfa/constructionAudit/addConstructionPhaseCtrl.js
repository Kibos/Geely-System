/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.constructionAudit')
      .controller('AddConstructionPhaseCtrl', AddConstructionPhaseCtrl);

  /** @ngInject */
  function AddConstructionPhaseCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.returnConstruction = function (){
      $state.go('ba.jiandianguanli.constructionStage');
    }

    $scope.date = new Date('2015-12-12');
    $scope.construction = {};
    $scope.saveInfo = function(){
     var newconstruction = {
        name:$scope.construction.name,
        information:$scope.construction.information,
        time1:$scope.construction.time1
      }
      console.log(newconstruction)
    }

   
  }
})();