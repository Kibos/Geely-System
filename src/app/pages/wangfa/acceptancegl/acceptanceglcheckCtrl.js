/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.acceptancegl')
      .controller('acceptanceglcheckCtrl', acceptanceglcheckCtrl);

  /** @ngInject */
  function acceptanceglcheckCtrl($scope,$state,$stateParams,$rootScope) {
    $scope.smartTablePageSize = 5;

    var information = $stateParams.obj;
    console.log(information);
    $scope.ysgl={
        agent:information.agent
    };
    $scope.submit=function(){
      // $state.go('ba.jiandianguanli.buildstorebtcheck');
      console.log($scope.ysgl);
    };


    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    // $scope.partners='杭州风景';
    $scope.file='杭州风景';
    $scope.flag=false;
    $scope.pass=function(){
      $scope.flag=true;
    };
    $scope.nopass=function(){
      $scope.flag=false;
    };

    $scope.check = {};
    $scope.submit=function(){
      $state.go("ba.jiandianguanli.acceptancegl");
      var newcheck={
          result:$scope.check.result,
          receptionTime:$scope.check.receptionTime,
          participant:$scope.check.participant
      }
      console.log(newcheck);
    }



  }
})();
