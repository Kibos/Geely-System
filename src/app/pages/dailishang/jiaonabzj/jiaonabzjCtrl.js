
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang')
      .controller('jiaonabzjCtrl', jiaonabzjCtrl);

  /** @ngInject */
  function jiaonabzjCtrl($scope,$state,$stateParams,$rootScope) {
   
       $scope.informations = [
          {
            origin:'提车',
            account:'销售入网奖励',
            money:'-2000',
            time:'2016-12-22'
          },
          {
            origin:'建材报销',
            account:'提车保证金',
            money:'20000',
            time:'2016-12-22'
          },
          {
            origin:'入网奖励',
            account:'售后入网奖励',
            money:'-1000',
            time:'2016-12-22'
          },
          {
            origin:'验收通过',
            account:'建店保证金',
            money:'20000',
            time:'2016-12-22'
          },
          {
            origin:'首批提车款',
            account:'提车保证金',
            money:'2500',
            time:'2016-12-22'
          },
          {
            origin:'提车',
            account:'售后入网奖励',
            money:'-1000',
            time:'2016-12-22'
          }
          

          
      ]

   
  }
})();
