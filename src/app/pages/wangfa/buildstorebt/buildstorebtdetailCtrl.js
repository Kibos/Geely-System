/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.buildstorebt')
      .controller('buildstorebtdetailCtrl', buildstorebtdetailCtrl);

  /** @ngInject */
  function buildstorebtdetailCtrl($scope,$state,$stateParams) {
    $scope.smartTablePageSize = 5;
    var information = $stateParams.obj;
    console.log(information);
    $scope.jdbt={
        agent:information.agent,
        type:information.type
    }
    $scope.submit=function(){
      // $state.go('ba.jiandianguanli.buildstorebtcheck');
      console.log($scope.jdbt);
    }


  }
})();
