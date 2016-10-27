/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.zuzhijigou')
      .controller('addTemplateCtrl', addTemplateCtrl);

  /** @ngInject */
  function addTemplateCtrl($scope,$state,$stateParams,$rootScope,$uibModal) {
      $scope.return = function(){
        $state.go('ba.zuzhijigou');
      }
      $scope.template = {}
      $scope.submit = function(){
      	var newtemplate = {
      		name:$scope.template.name,
      		type1:$scope.template.type1,
      		type2:$scope.template.type2,
      		type3:$scope.template.type3,
      		area1:$scope.template.area1,
      		area2:$scope.template.area2,
      		area3:$scope.template.area3,
      		discrible:$scope.template.discrible,
      		state:$scope.template.state
      	}
      	console.log(newtemplate);
        $state.go('ba.zuzhijigou');
      }

      
    
  }
})();
