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

    $scope.date = new Date('2016-10-12');
    $scope.construction = {};
    $scope.saveInfo = function(){
     var newconstruction = {
        name:$scope.construction.name,
        description:$scope.construction.description,
        time1:$scope.construction.time1,
        time2:$scope.construction.time2

      }
      console.log(newconstruction);
      $state.go('ba.jiandianguanli.constructionStage');
    }

   
  }
})();
