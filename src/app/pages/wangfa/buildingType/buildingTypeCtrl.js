/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.buildingType')
      .controller('BuildingTypeCtrl', BuildingTypeCtrl);

  /** @ngInject */
  function BuildingTypeCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.informations=[
        {
          type:'一类展厅',
          width:'28~32',
          height:'5~10',
          acreage:'2200',
          minCarNum:'4~6',
          minWorkstation:'27',
          date:'启用'
        },
        {
          type:'二类展厅',
          width:'28~32',
          height:'5~10',
          acreage:'2200',
          minCarNum:'4~6',
          minWorkstation:'27',
          date:'启用'
        },
        {
          type:'品牌体验中心',
          width:'28~32',
          height:'5~10',
          acreage:'2200',
          minCarNum:'4~6',
          minWorkstation:'27',
          date:'启用'
        }
    ]
    $scope.add=function () {
      $state.go('ba.addType');
      console.log("增加");
      // body...
    }
  }
})();
