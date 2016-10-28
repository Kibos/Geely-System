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


        //待审核
        $scope.shoplists = [];
        $scope.shoplists_data = [];
        function getNotVerifyShops() {
          Shop.getShopByQuery.query({verifyDataSubmitting:true,notverify:false,isVerify:false},function(data){
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
        var state = [
          '开发经理审核',
          '开发大区经理审核',
          '实地考察审核（上传评估报告)',
          '内部评审会',
          '陈述会结果审核',
          '合作商入网审批'
        ]
        $scope.test = function (item) {

          return state[item.length-1];

        }

        $scope.spliceTime = function (time) {
          return time.slice(0,10)
        }

        //状态搜索
        $scope.selectState = function (selectStateQuery) {
          console.log(selectStateQuery);
          if(selectStateQuery===undefined){
            getNotVerifyShops()
          } else if(selectStateQuery==='全部') {
            getNotVerifyShops()
          }
          else {
            var index = state.indexOf(selectStateQuery);
            console.log(index+2);
            Shop.getShopByState.query({num:index+2}, function (data) {
              $scope.shoplists_data = data;
            })

          }


        }

        //通知         //全部审核完等待通知的isVerify

        $scope.tongzhishoplists = [];
        $scope.tongzhishoplists_data = [];
        function gettongzhishoplists() {
          Shop.getShopByQuery.query({isVerify:true},function(data){
            console.log('{isVerify:true}');
            console.log(data);
            $scope.tongzhishoplists_data = data;
            // $scope.shoplists = data;

          })
        }
        gettongzhishoplists()

        $scope.notVerifyedshoplists = [];
        $scope.notVerifyedshoplists_data = [];
        function getnotVerifyedshoplists() {
          Shop.getShopByQuery.query({notverify:true},function(data){

            $scope.notVerifyedshoplists_data = data;
            // $scope.shoplists = data;

          })
        }
        getnotVerifyedshoplists()


        // $scope.applicants=[
        //  {
        //      id:1,
        //      area:'北京',
        //      company:'维擎科技',
        //      person:'黎明',
        //      phone:'123456789',
        //      state:'未通过',
        //      date:'20161006',
        //  },
        //  {
        //      id:2,
        //      area:'北京',
        //      company:'维擎科技',
        //      person:'黎明',
        //      phone:'123456789',
        //      state:'未通过',
        //      date:'20161006',
        //  },
        //  {
        //      id:1,
        //      area:'北京',
        //      company:'维擎科技',
        //      person:'黎明',
        //      phone:'123456789',
        //      state:'未通过',
        //      date:'20161006',
        //  },
        //  {
        //      id:3,
        //      area:'北京',
        //      company:'维擎科技',
        //      person:'黎明',
        //      phone:'123456789',
        //      state:'未通过',
        //      date:'20161006',
        //  },
        //  {
        //      id:1,
        //      area:'北京',
        //      company:'维擎科技',
        //      person:'黎明',
        //      phone:'123456789',
        //      state:'未通过',
        //      date:'20161006',
        //  },
        //  {
        //      id:4,
        //      area:'北京',
        //      company:'维擎科技',
        //      person:'黎明',
        //      phone:'123456789',
        //      state:'未通过',
        //      date:'20161006',
        //  },
        //  {
        //      id:5,
        //      area:'北京',
        //      company:'维擎科技',
        //      person:'黎明',
        //      phone:'123456789',
        //      state:'未通过',
        //      date:'20161006',
        //  }
        //
        // ]




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


        $scope.stateGo1 = function (operate) {
         console.log(operate);
                     $state.go('ba.rulisa.inform');
        //  if (operate === '通知') {
        //
        //      console.log('tongzhi')
        //
        //      $state.go('ba.rulisa.inform');
        //  } else {
        //      console.log('chakan')
        //
        //      $state.go('ba.rulisa.viewDetails');
        //  }
        }

  }
})();
