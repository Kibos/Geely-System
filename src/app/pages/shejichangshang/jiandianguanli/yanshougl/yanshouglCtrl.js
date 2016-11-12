/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.shejichangshang.jiandianguanliss')
      .controller('yanshouglCtrl', yanshouglCtrl);

  /** @ngInject */
  function yanshouglCtrl($scope,$state,RoleUser,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.smartTablePageSize = 5;


    $scope.acceptancelists = [
      {
        name:'杭州吉利4S店',
        type:'旗舰店',
        address:'杭州市上城区',
        status:'待提交申请'
      },
      {
        name:'杭州吉利4S店',
        type:'旗舰店',
        address:'杭州市上城区',
        status:'待提交申请'
      },
      {
        name:'杭州吉利4S店',
        type:'旗舰店',
        address:'杭州市上城区',
        status:'待提交申请'
      },
      {
        name:'杭州吉利4S店',
        type:'旗舰店',
        address:'杭州市上城区',
        status:'待提交申请'
      },
      {
        name:'杭州吉利4S店',
        type:'旗舰店',
        address:'杭州市上城区',
        status:'待提交申请'
      },
      {
        name:'杭州吉利4S店',
        type:'旗舰店',
        address:'杭州市上城区',
        status:'待提交申请'
      },
      {
        name:'杭州吉利4S店',
        type:'旗舰店',
        address:'杭州市上城区',
        status:'待提交申请'
      },
      {
        name:'杭州吉利4S店',
        type:'旗舰店',
        address:'杭州市上城区',
        status:'待提交申请'
      }
    ];


  }
})();
