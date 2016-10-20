/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.rectificationsq')
      .controller('rectificationsqCtrl', rectificationsqCtrl);

  /** @ngInject */
  function rectificationsqCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.partners='杭州吉利4S店';
    $scope.information='杭州吉利4S店';
    $scope.submit=function () {
      $state.go('ba.submitreport');
      // body...
    }
  }
})();
