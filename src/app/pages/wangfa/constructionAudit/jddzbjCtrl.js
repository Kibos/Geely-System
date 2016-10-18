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
    var id = $stateParams.obj;
   
    console.log(id)
    // $scope.addNew = function(){
    //   console.log("fsd");
    // 	$state.go('components.addConstructionPhase');
    // }
   
    $scope.constructions=[
      {
        name:'维擎科技',
        description:'xxxxxxxxx',
        time:'2016-09-01  至  2016-10-10',
        status:'已完成'
      },
      {
        name:'hhh',
        description:'xxxxxxxxx',
        time:'2016-09-01  至  2016-10-10',
        status:'延期'
      },
      {
        name:'hhh',
        description:'xxxxxxxxx',
        time:'2016-09-01  至  2016-10-10',
        status:'进行中'
      }
    ]

  }
})();
