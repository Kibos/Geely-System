/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang')
      .controller('acceptancesqCtrl', acceptancesqCtrl);

  /** @ngInject */
  function acceptancesqCtrl($scope,$state,$stateParams, $rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.agent='杭州风景';
    $scope.submit=function () {
      // $state.go('components.acceptanceCheck');
      var acceptance={
          agent:$scope.agent,
          file:$scope.file,
      }
      console.log(acceptance);

    }
  }
})();
