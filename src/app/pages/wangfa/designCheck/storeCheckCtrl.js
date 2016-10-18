/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.designCheck')
      .controller('StoreCheckCtrl', StoreCheckCtrl);

  /** @ngInject */
  function StoreCheckCtrl($scope,$state,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.showflag=false;
    $scope.change=function(){
        $scope.showflag=!$scope.showflag;
    }

    // Jiandianshenhe.jiandianList.query(function(data){

    //     $scope.jiandianList = data;

    // })
   
     
    // 设计厂商选择
    var vm = this;
    vm.selectItems=[
        { label: '杭州风景', value: 1},
        { label: '北京xx', value: 2},
      ];

// 代理商信息
     $scope.partners=
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
     //审核日志
     $scope.checkLog=[
        {
          date:'20161008',
          person:'黎明',
          x:'业务部门审核通过',
          result:'市场部 张经理审核通过'
        },
        {
          date:'20161008',
          person:'黎明',
          x:'业务部门审核通过',
          result:'市场部 张经理审核通过'
        },
        {
          date:'20161008',
          person:'黎明',
          x:'业务部门审核通过',
          result:'市场部 张经理审核通过'
        }

     ]
     $scope.information={}
     $scope.submit=function(){
        $state.go('ba.jiandianguanli.designCheck');
        var newinformation={
          opinion:$scope.information.opinion,
          file:$scope.information.file,
          companyName:$scope.information.companyName,
          prospect:$scope.information.prospect
        }
        console.log(newinformation);
     }
     $scope.cancel=function(){
        $state.go('ba.jiandianguanli.designCheck');
     }
  }
})();
