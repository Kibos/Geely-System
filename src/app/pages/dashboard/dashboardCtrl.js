/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('dashboardCtrl', dashboardCtrl);

  /** @ngInject */
  function dashboardCtrl($scope,Auth) {

    //供应商概览
    $scope.supplier = {id:'100502154',name:'浙江XX集团',person:'张三',phone:'1868989898',message:'供应商概览简介--------'};

    $scope.user=Auth.getCurrentUser();

    $scope.roles={'admin':'网发','user':'代理商','gonguser':'供应厂商','deuser':'设计厂商'}
  }
})();
