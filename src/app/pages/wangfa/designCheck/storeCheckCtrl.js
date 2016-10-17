/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.designCheck')
      .controller('StoreCheckCtrl', StoreCheckCtrl);

  /** @ngInject */
  function StoreCheckCtrl($scope,$state,$rootScope, $stateParams,Designs,Auth) {
    var vm = this;

    var shop = $stateParams.obj.shop;
    vm.selectItems = $stateParams.obj.selectItems;
    $scope.user = Auth.getCurrentUser()


    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.showflag=false;
    $scope.changehide=function(){
        console.log('change');
        $scope.showflag=!$scope.showflag;
    }

    // Jiandianshenhe.jiandianList.query(function(data){

    //     $scope.jiandianList = data;

    // })



    // 设计厂商选择
    // vm.selectItems=[
    //     { label: '杭州风景', value: 1},
    //     { label: '北京xx', value: 2},
    //   ];

// 代理商信息
     $scope.partners=
     	{
     		id:1,
     		compony:shop.basic.companyName,
     		name:'汽车',
     		place:'北京',
     		type:'旗舰店',
     		person:shop.shopApplyUserId.name,
     		phone:shop.shopApplyUserId.cellphone,
     		email:shop.shopApplyUserId.email
     	}
     //审核日志
     $scope.checkLog = shop.applyId.verify.slice(1)
     $scope.isornotinfo = function (bl) {
       if(bl){
         return '通过'
       } else {
         return '不通过'
       }
     }
     $scope.information={}
     $scope.submit=function(){
        // $state.go('components.designCheck');
        var newinformation={
          content:$scope.information.opinion,
          designId:$scope.information.companyName._id,
          shopId: shop._id,
          name:$scope.user.name,
          userId:$scope.user._id,
          time:Date.now(),
          shopApplyUserId:shop.shopApplyUserId._id
        }



      //   var verInfo = {
      //    name:$scope.user.name,
      //    userId:$scope.user._id,
      //    time:Date.now(),
      //    info:state[shop.applyId.verify.length-1],
      //    bool:flag,
      //    step:shop.applyId.verify.length,
      //    opinion: $scope.info.description
      //  }

      Designs.verify.save(newinformation, function (data) {
        console.log(data)
      })


       console.log(newinformation);
     }
     $scope.cancel=function(){
        $state.go('components.designCheck');
     }
  }
})();
