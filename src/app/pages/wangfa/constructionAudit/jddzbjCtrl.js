/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.constructionAudit')
      .controller('jddzbjCtrl', jddzbjCtrl);

  /** @ngInject */
  function jddzbjCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    var information = $stateParams.obj;
   
    console.log(information.name)
    // $scope.addNew = function(){
    //   console.log("fsd");
    // 	$state.go('components.addConstructionPhase');
    // }
   $scope.construction = {
        name:information.name,
        description:information.description,
        time:information.time
   }

   $scope.saveInfo = function(){
    var newConstruction = {
      newname:$scope.construction.name,
      newdescription:$scope.construction.description,
      newtime:$scope.construction.time
    }
    console.log(newConstruction);
    $state.go('ba.jiandianguanli.constructionStage');
   }
   $scope.returnBack = function(){
      $state.go('ba.jiandianguanli.constructionStage');
   }

  }
})();
