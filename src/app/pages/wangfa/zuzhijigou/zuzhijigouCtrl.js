/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.zuzhijigou')
      .controller('zuzhijigouCtrl', zuzhijigouCtrl);

  /** @ngInject */
  function zuzhijigouCtrl($scope,$state,$stateParams,$rootScope,$uibModal) {

    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.addNew = function(){
      $state.go('ba.addTemplate');
    }
      $scope.templates = [
          {
            number:'0001',
            name:'模板1',
            type:'4S',
            area:'华东',
            status:'启用'
          },
          {
            number:'0002',
            name:'模板2',
            type:'城市展厅',
            area:'华东',
            status:'未启用'
          }
          
      ]

      
    
  }
})();
