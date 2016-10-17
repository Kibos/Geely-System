/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.designCheck')
      .controller('DesignCheckCtrl', DesignCheckCtrl);

  /** @ngInject */
  function DesignCheckCtrl($scope,$rootScope,Shop,Designs) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    console.log('info');


    Designs.query(function(res){
      console.log(res);
      $scope.selectItems = res;
    })


    $scope.tongzhishoplists = [];
    $scope.tongzhishoplists_data = [];
    function gettongzhishoplists() {
      Shop.getShopByQuery.query({isVerify:true},function(data){
        console.log(data);
        $scope.tongzhishoplists_data = data;
        // $scope.shoplists = data;

      })
    }
    gettongzhishoplists()
    $scope.test = function (item) {
      // var state = [
      //   '开发经理审核',
      //   '开发大区经理审核',
      //   '实地考察审核（上传评估报告)',
      //   '内部评审会',
      //   '陈述会结果审核',
      //   '合作商入网审批'
      // ]
      // return state[item.length-1];
      if(!item.hasOwnProperty('designsShopRelation') && item.isTiJiaoChuGao!==true){
        // console.log('has');
        return '待确认勘察内容';
      }else{
        return '初稿待审批';
      }

    }

    $scope.spliceTime = function (time) {
      return time.slice(0,10)
    }

     $scope.applicants=[
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
