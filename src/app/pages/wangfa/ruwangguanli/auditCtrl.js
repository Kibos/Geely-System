/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.ruwangguanlisk')
      .controller('AuditCtrl', AuditCtrl);

  /** @ngInject */
  function AuditCtrl($scope, $state, Shop, $timeout, $rootScope,$stateParams) {

        var info = $stateParams.obj;
        console.log(info);
        //待审核
        $scope.status = "待通知";
        if(info === "1"){
            $scope.status = "待打款";
        }
        $scope.shoplists = [];
        $scope.shoplists_data = [];
        function getNotVerifyShops() {
          Shop.getShopByQuery.query({verifyDataSubmitting:true,notverify:false,isVerify:false,shenheshibaiFlag:false},function(data){
            console.log(data);
            $scope.shoplists_data = data;
            // $scope.shoplists = data;

          })
        }
        getNotVerifyShops()
        $scope.chakan = function(item){
          console.log('chakan');
          $state.go('ba.rulisa.check',{obj:{item:item,test:"1"}})
        }
        $scope.stateGo = function (item) {
          console.log('stateGo');
          $state.go("ba.rulisa.check",{obj:{item:item,test:"2"}})
        }
        var state = [
          '开发经理审核',
          '开发大区经理审核',
          '实地考察审核（上传评估报告)',
          '内部评审会',
          '陈述会结果审核',
          '代理商入网审批'
        ]
        $scope.test = function (item) {

          return state[item.length-1];

        }
        $scope.nottest = function (item) {

          return item.verifyHistory[item.verifyHistory.length-1].info;

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
          Shop.getShopByQuery.query({isVerify:true,shenheshibaiFlag:false},function(data){
            console.log('通知');
            console.log(data);
            $scope.tongzhishoplists_data = data;
            // $scope.shoplists = data;

          })
        }
        gettongzhishoplists()

        $scope.notVerifyedshoplists = [];
        $scope.notVerifyedshoplists_data = [];
        function getnotVerifyedshoplists() {
          Shop.getShopByQuery.query({isVerify:false,shenheshibaiFlag:true},function(data){
            console.log(data);
            $scope.notVerifyedshoplists_data = data;
            // $scope.shoplists = data;

          })
        }
        getnotVerifyedshoplists()

        $scope.stateGo1 = function (item) {
         //console.log(operate);
          $state.go("ba.rulisa.inform",{obj:item});
        }

  }
})();
