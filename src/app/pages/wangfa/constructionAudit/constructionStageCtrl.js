/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.constructionAudit')
      .controller('ConstructionStageCtrl', ConstructionStageCtrl);

  /** @ngInject */
  function ConstructionStageCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    var id = $stateParams.obj;
    console.log('id');
    console.log(id)
    $scope.addNew = function(){
      console.log("fsd");
    	$state.go('ba.jiandianguanli.addConstructionPhase');
    }

    $scope.stateGo = function(item){
      console.log(item);
      console.log(item.status);
      if(item.status === '进行中' || item.status === '已完成'){

          $state.go('ba.jiandianguanli.particulars',{obj:item});

      }else{
          $state.go('ba.jiandianguanli.jddzbj',{obj:item});
      }
    }
    $scope.construction = {
      agent:'杭州风景',
      designer:'北京',
      supplier:'北京'
    }
    $scope.constructions=[
      {
        name:'杭州吉利',
        description:'xxxxxxxxx',
        time:'2016-09-01  至  2016-10-10',
        status:'已完成'
      },
      {
        name:'北京吉利4S店',
        description:'xxxxxxxxx',
        time:'2016-09-01  至  2016-10-10',
        status:'延期'
      },
      {
        name:'杭州吉利4S店',
        description:'xxxxxxxxx',
        time:'2016-09-01  至  2016-10-10',
        status:'进行中'
      }

    ]
    $scope.report = [
      {
        time1:'2016.1.1~1.7',
        author:'李明',
        time2:'2016.9.4 23:00',
        description:'本周完成XXXXXXXXXXXXXXXXXXXXXXXXXXX'
      },
      {
        time1:'2016.1.8~1.14',
        author:'李红',
        time2:'2016.9.4 23:00',
        description:'本周完成XXXXXXXXXXXXXXXXXXXXXXXXXXX'
      }
    ]

  }
})();
