/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.ruwangguanlisk')
      .controller('CheckCtrl', CheckCtrl);

  /** @ngInject */
  function CheckCtrl($scope,$state,$stateParams,$rootScope,Auth,Audit,localStorageService) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;

    var shop = $stateParams.obj;
    if(shop){
      console.log('set--=-=-=');
      localStorageService.set('checkshop', shop);
    }else{
      console.log('checkshop');
      shop = localStorageService.get('checkshop')
    }


    console.log(shop)

    $scope.user = Auth.getCurrentUser()

    var state = [
      '开发经理审核',
      '开发大区经理审核',
      '实地考察审核（上传评估报告)',
      '内部评审会',
      '陈述会结果审核',
      '合作商入网审批'
    ]

    $scope.paneltitle = state[shop.applyId.verify.length-1];


    $scope.options = {
      pass: false,
    };
    $scope.info = {
      description: ''
    };
    $scope.submit=function(){
    	// $state.go('components.audit');
      var flag = null;
      if( $scope.options.pass === 'true'){
        flag = true;
      } else {
        flag = false;
      }
      // todo add role to info
      var isVerify = false;
      if(state[shop.applyId.verify.length-1]==='合作商入网审批'){
        isVerify = true;
      }
      var verInfo = {
       name:$scope.user.name,
       userId:$scope.user._id,
       time:Date.now(),
       info:state[shop.applyId.verify.length-1],
       bool:flag,
       step:shop.applyId.verify.length,
       opinion: $scope.info.description
     }
     console.log(verInfo);
      var post = {applyId:shop.applyId._id, verify:verInfo, shopId:shop._id, isVerify:isVerify}
      Audit.stepVerify.save(post,function(res){
        // console.log(res);
        localStorageService.remove('checkshop');
        $state.go('admin.audit');
      })
    }
    $scope.cancel=function(){
      localStorageService.remove('checkshop');
    	$state.go('admin.audit');
    }

//-------------展开历史记录------------
    $scope.showflag=false;
    $scope.change=function(){
        $scope.showflag=!$scope.showflag;

    }
//---------------基本信息--------------
    $scope.agent = shop.basic;

   $scope.checkLog = shop.applyId.verify.slice(1)
   $scope.isornotinfo = function (bl) {
     if(bl){
       return '通过'
     } else {
       return '不通过'
     }
   }

  }
})();
