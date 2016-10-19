/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.designCheck')
      .controller('DesignCheckCtrl', DesignCheckCtrl);

  /** @ngInject */
  function DesignCheckCtrl($scope,$state,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
   $scope.goState = function(status){
        if(status === '待勘察内容确认'){
            $state.go('ba.jiandianguanli.storeCheck');
        }else if(status === '设计初稿待审批'){
            $state.go('ba.jiandianguanli.cgdsp');
        }else if(status === '设计初稿待领导审批'){
            $state.go('ba.jiandianguanli.cgdldsp');
        }else if(status === '设计终稿待审批'){
            $state.go('ba.jiandianguanli.zgdsp');
        }else if(status === '设计终稿待领导审批'){
            $state.go('ba.jiandianguanli.zgdldsp');
        }
   }
     $scope.applicants=[
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		status:'待勘察内容确认',
    		date:'20161006',
    	},
    	{
    		id:2,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		status:'设计初稿待审批',
    		date:'20161006',
    	},
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		status:'设计初稿待领导审批',
    		date:'20161006',
    	},
    	{
    		id:3,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		status:'设计终稿待审批',
    		date:'20161006',
    	},
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		status:'设计终稿待领导审批',
    		date:'20161006',
    	},
    	{
    		id:4,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		status:'未通过',
    		date:'20161006',
    	},
    	{
    		id:5,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		status:'未通过',
    		date:'20161006',
    	}

    ]

    $scope.applicants2=[
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:2,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:3,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:1,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:4,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	},
    	{
    		id:5,
    		area:'北京',
    		company:'维擎科技',
    		person:'黎明',
    		phone:'123456789',
    		state:'未通过',
    		date:'20161006',
    	}

    ]
  }
})();
