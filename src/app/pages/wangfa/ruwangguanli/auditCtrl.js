/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.ruwangguanlisk')
      .controller('AuditCtrl', AuditCtrl);

  /** @ngInject */
  function AuditCtrl($scope, $state, Shop, $timeout, $rootScope) {


        $scope.shoplists = [];
        $scope.shoplists_data = [];
        function getNotVerifyShops() {
          Shop.getShopByQuery.query({verifyDataSubmitting:true},function(data){
            console.log(data);
            $scope.shoplists_data = data;
            // $scope.shoplists = data;

          })
        }
        getNotVerifyShops()

        $scope.stateGo = function (item) {
          console.log('stateGo');
          $state.go("ba.rulisa.check",{obj:item})
        }

        $scope.test = function (item) {
          var state = [
            '开发经理审核',
            '开发大区经理审核',
            '实地考察审核（上传评估报告)',
            '内部评审会',
            '陈述会结果审核',
            '合作商入网审批'
          ]
          return state[item.length-1];

        }

        $scope.spliceTime = function (time) {
          return time.slice(0,10)
        }

          // $scope.applicants = [{"_id":"57f9bc0ee368d95591576ae8","shopId":3,"companyName":"jili4S","carBrand":"jili","shopApplyUserId":{"_id":"57f89b828a76b62a21ccbf81","provider":"local","email":"1234567@qq.com","hashedPassword":"WgTtfvhJYXkvJL8RWgxKrl1x0G+W7meLkTZESO7IfUCoILOcZWDQa4eXHTg2BzorVJin4cw79SzRVDYMNk2b9A==","salt":"5Q5MYiqOUsg5JG+GbIJ6sQ==","__v":0,"cellphone":"13165508732","name":"陈浩","userInfo":[],"roles":[],"role":"user","address":[]},"isVerify":false,"wait_to_cheack":true,"__v":0,"meta":{"updateAt":"2016-10-09T03:39:58.282Z","createAt":"2016-10-09T03:39:58.282Z"}},{"_id":"57f9bc16e368d95591576ae9","shopId":4,"companyName":"jili4S","carBrand":"jili","shopApplyUserId":{"_id":"57f89b828a76b62a21ccbf81","provider":"local","email":"1234567@qq.com","hashedPassword":"WgTtfvhJYXkvJL8RWgxKrl1x0G+W7meLkTZESO7IfUCoILOcZWDQa4eXHTg2BzorVJin4cw79SzRVDYMNk2b9A==","salt":"5Q5MYiqOUsg5JG+GbIJ6sQ==","__v":0,"cellphone":"13165508732","name":"陈浩","userInfo":[],"roles":[],"role":"user","address":[]},"isVerify":false,"wait_to_cheack":true,"__v":0,"meta":{"updateAt":"2016-10-09T03:40:06.206Z","createAt":"2016-10-09T03:40:06.206Z"}},{"_id":"57f9bc17e368d95591576aea","shopId":5,"companyName":"jili4S","carBrand":"jili","shopApplyUserId":{"_id":"57f89b828a76b62a21ccbf81","provider":"local","email":"1234567@qq.com","hashedPassword":"WgTtfvhJYXkvJL8RWgxKrl1x0G+W7meLkTZESO7IfUCoILOcZWDQa4eXHTg2BzorVJin4cw79SzRVDYMNk2b9A==","salt":"5Q5MYiqOUsg5JG+GbIJ6sQ==","__v":0,"cellphone":"13165508732","name":"陈浩","userInfo":[],"roles":[],"role":"user","address":[]},"isVerify":false,"wait_to_cheack":true,"__v":0,"meta":{"updateAt":"2016-10-09T03:40:07.330Z","createAt":"2016-10-09T03:40:07.330Z"}},{"_id":"57f9bc17e368d95591576aeb","shopId":6,"companyName":"jili4S","carBrand":"jili","shopApplyUserId":{"_id":"57f89b828a76b62a21ccbf81","provider":"local","email":"1234567@qq.com","hashedPassword":"WgTtfvhJYXkvJL8RWgxKrl1x0G+W7meLkTZESO7IfUCoILOcZWDQa4eXHTg2BzorVJin4cw79SzRVDYMNk2b9A==","salt":"5Q5MYiqOUsg5JG+GbIJ6sQ==","__v":0,"cellphone":"13165508732","name":"陈浩","userInfo":[],"roles":[],"role":"user","address":[]},"isVerify":false,"wait_to_cheack":true,"__v":0,"meta":{"updateAt":"2016-10-09T03:40:07.732Z","createAt":"2016-10-09T03:40:07.732Z"}},{"_id":"57f9bc17e368d95591576aec","shopId":7,"companyName":"jili4S","carBrand":"jili","shopApplyUserId":{"_id":"57f89b828a76b62a21ccbf81","provider":"local","email":"1234567@qq.com","hashedPassword":"WgTtfvhJYXkvJL8RWgxKrl1x0G+W7meLkTZESO7IfUCoILOcZWDQa4eXHTg2BzorVJin4cw79SzRVDYMNk2b9A==","salt":"5Q5MYiqOUsg5JG+GbIJ6sQ==","__v":0,"cellphone":"13165508732","name":"陈浩","userInfo":[],"roles":[],"role":"user","address":[]},"isVerify":false,"wait_to_cheack":true,"__v":0,"meta":{"updateAt":"2016-10-09T03:40:07.942Z","createAt":"2016-10-09T03:40:07.942Z"}},{"_id":"57f9bc18e368d95591576aed","shopId":8,"companyName":"jili4S","carBrand":"jili","shopApplyUserId":{"_id":"57f89b828a76b62a21ccbf81","provider":"local","email":"1234567@qq.com","hashedPassword":"WgTtfvhJYXkvJL8RWgxKrl1x0G+W7meLkTZESO7IfUCoILOcZWDQa4eXHTg2BzorVJin4cw79SzRVDYMNk2b9A==","salt":"5Q5MYiqOUsg5JG+GbIJ6sQ==","__v":0,"cellphone":"13165508732","name":"陈浩","userInfo":[],"roles":[],"role":"user","address":[]},"isVerify":false,"wait_to_cheack":true,"__v":0,"meta":{"updateAt":"2016-10-09T03:40:08.116Z","createAt":"2016-10-09T03:40:08.116Z"}}]




        // $scope.applicants=[
        // 	{
        // 		id:1,
        // 		area:'北京',
        // 		company:'维擎科技',
        // 		person:'黎明',
        // 		phone:'123456789',
        // 		state:'未通过',
        // 		date:'20161006',
        // 	},
        // 	{
        // 		id:2,
        // 		area:'北京',
        // 		company:'维擎科技',
        // 		person:'黎明',
        // 		phone:'123456789',
        // 		state:'未通过',
        // 		date:'20161006',
        // 	},
        // 	{
        // 		id:1,
        // 		area:'北京',
        // 		company:'维擎科技',
        // 		person:'黎明',
        // 		phone:'123456789',
        // 		state:'未通过',
        // 		date:'20161006',
        // 	},
        // 	{
        // 		id:3,
        // 		area:'北京',
        // 		company:'维擎科技',
        // 		person:'黎明',
        // 		phone:'123456789',
        // 		state:'未通过',
        // 		date:'20161006',
        // 	},
        // 	{
        // 		id:1,
        // 		area:'北京',
        // 		company:'维擎科技',
        // 		person:'黎明',
        // 		phone:'123456789',
        // 		state:'未通过',
        // 		date:'20161006',
        // 	},
        // 	{
        // 		id:4,
        // 		area:'北京',
        // 		company:'维擎科技',
        // 		person:'黎明',
        // 		phone:'123456789',
        // 		state:'未通过',
        // 		date:'20161006',
        // 	},
        // 	{
        // 		id:5,
        // 		area:'北京',
        // 		company:'维擎科技',
        // 		person:'黎明',
        // 		phone:'123456789',
        // 		state:'未通过',
        // 		date:'20161006',
        // 	}
        //
        // ]


        // $scope.notVerifyedshoplists = [];
        // $scope.notVerifyedshoplists_data = [];
        // function getnotVerifyedshoplists() {
        //   Shop.getNotVerifyShops.query({notverify:true},function(data){
        //
        //     $scope.notVerifyedshoplists_data = data;
        //     // $scope.shoplists = data;
        //
        //   })
        // }
        // getnotVerifyedshoplists()

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

        $scope.applicants3=[
        	{
        		id:5,
        		area:'北京',
        		company:'维擎科技',
        		person:'黎明',
        		phone:'123456789',
        		state:'未通过',
        		date:'20161006',
        		operate:'通知'
        	},
        	{
        		id:1,
        		area:'北京',
        		company:'维擎科技',
        		person:'黎明',
        		phone:'123456789',
        		state:'未通过',
        		date:'20161006',
        		operate:'查看'
        	}
        	]
          // $scope.tongzhishoplists = [];
          // $scope.tongzhishoplists_data = [];
          // function gettongzhishoplists() {
          //   Shop.getShopByQuery.query({isVerify:true},function(data){
          //     console.log(data);
          //     $scope.tongzhishoplists_data = data;
          //     // $scope.shoplists = data;
          //
          //   })
          // }
          // gettongzhishoplists()


        // $scope.stateGo = function (operate) {
        // 	console.log(operate);
        //
        // 	if (operate === '通知') {
        //
        // 		console.log('tongzhi')
        //
        // 		$state.go('ba.rulisa.inform');
        // 	} else {
        // 		console.log('chakan')
        //
        // 		$state.go('ba.rulisa.viewDetails');
        // 	}
        // }

  }
})();
