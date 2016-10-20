/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.constructionAudit')
      .controller('particularsCtrl', particularsCtrl);

  /** @ngInject */
  function particularsCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    var information = $stateParams.obj;
   
    console.log(information.name)
    $scope.returnBack = function(){
      $state.go('ba.jiandianguanli.constructionStage');
    }
   $scope.construction = {
        name:information.name,
        description:information.description,
        time:information.time
   }
  
  }
})();
