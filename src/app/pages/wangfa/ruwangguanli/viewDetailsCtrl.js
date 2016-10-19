/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.ruwangguanlisk')
      .controller('ViewDetailsCtrl', ViewDetailsCtrl);

  /** @ngInject */
  function ViewDetailsCtrl($scope,$state,$uibModal,  $rootScope) {

    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
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
     $scope.partners=[
     	{
     		id:1,
     		compony:'北京xx',
     		name:'汽车',
     		place:'北京',
     		type:'旗舰店',
     		person:'黎明',
     		phone:'13235556556',
     		email:'1213444@qq.com'
     	}
     ]
     $scope.return=function(){
      $state.go('ba.rulisa.ruwangshenhe.audit');
     }
  }
})();
