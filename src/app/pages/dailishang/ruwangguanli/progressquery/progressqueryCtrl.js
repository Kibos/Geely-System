/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.ruwangguanli.progressquery')
      .controller('progressqueryCtrl', progressqueryCtrl);

  /** @ngInject */
  function progressqueryCtrl($scope,Auth,Shop) {
    /*入网 */
    $scope.rwnums =[{bool:false},{bool:false},{bool:false},{bool:false},{bool:false},{bool:false}];

    $scope.currentUser = Auth.getCurrentUser();

    console.log($scope.currentUser);

    Shop.getShopsByuserId.get({id:$scope.currentUser._id},function(data){

      console.log(data);
      if (data.applyId) {
        var arr = data.applyId.verify;
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          $scope.rwnums[i].bool = arr[i].bool;
        }

      }


    });

    /*入网 */
    //  $scope.rwnums =[{bool:true},{bool:true},{bool:false},{bool:false},{bool:false},{bool:false}];
    /*建店 */
    $scope.jdnums =[{bool:true},{bool:true},{bool:true},{bool:false},{bool:false},{bool:false},{bool:false}];

  }
})();
