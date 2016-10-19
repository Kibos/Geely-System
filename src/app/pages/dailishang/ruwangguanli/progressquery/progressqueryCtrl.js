/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.ruwangguanli.progressquery')
      .controller('progressqueryCtrl', progressqueryCtrl);

  /** @ngInject */
  function progressqueryCtrl($scope) {

    /*入网 */
     $scope.rwnums =[{bool:true},{bool:true},{bool:false},{bool:false},{bool:false},{bool:false}];
     /*建店 */
     $scope.jdnums =[{bool:true},{bool:true},{bool:false},{bool:false},{bool:false},{bool:false},{bool:false}];

  }
})();
