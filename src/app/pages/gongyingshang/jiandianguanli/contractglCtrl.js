/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.gongyingshang.jiandian')
      .controller('contractglCtrl', contractglCtrl);

  /** @ngInject */
  function contractglCtrl($scope,RoleUser,Auth) {
    $scope.smartTablePageSize = 5;
    $scope.applicants=[];

    var entries =RoleUser.myContract.query({id:Auth.getCurrentUser()._id},function() {
       
        $scope.applicants=entries;
          console.log("++++>>>"+JSON.stringify(entries)+"   ......>>>"+Auth.getCurrentUser()._id);
    });

        // id:1,
        // area:'北京',
        // company:'北京吉利4S店',
        // person:'李明',
        // phone:'123456789',
        // state:'待上传合同',
        // date:'20161006',



  }
})();
