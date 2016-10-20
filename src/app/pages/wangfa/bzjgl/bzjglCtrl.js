/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa')
      .controller('bzjglCtrl', bzjglCtrl);

  /** @ngInject */
  function bzjglCtrl($scope,$state,$stateParams,$rootScope,$uibModal) {

    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
   
      $scope.informations = [
          {
            agent:'杭州风景',
            time:'2016-12-22',
            status:'已超时'
          },
          {
            agent:'上海华庭',
            time:'2016-10-28',
            status:'待打款'
          },
          {
            agent:'杭州吉利4S店',
            time:'2016-11-28',
            status:'待打款'
          },
          {
            agent:'北京吉利4S店',
            time:'2016-11-28',
            status:'已超时'
          }
      ]

       $scope.modelClick = function(){
      console.log("查看");

    };
    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };
  }
})();
