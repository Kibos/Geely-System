/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.buildstorebt')
      .controller('buildstorebtcheckCtrl', buildstorebtcheckCtrl);

  /** @ngInject */
  function buildstorebtcheckCtrl($scope,$stateParams,$state) {
    $scope.smartTablePageSize = 5;
    var information = $stateParams.obj;
    console.log($stateParams.obj);
    $scope.jdbt={
        agent:information.agent,
        type:information.type
        // pay1:information.pay1,
        // pay2:information.pay2,
        // pay3:information.pay3
    };
    $scope.submit=function(){
      $state.go('ba.jiandianguanli.buildstorebt');
      console.log($scope.jdbt);
    }


  }
})();
