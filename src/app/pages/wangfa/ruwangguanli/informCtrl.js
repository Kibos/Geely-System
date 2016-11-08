/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.ruwangguanlisk')
      .controller('InformCtrl', InformCtrl);

  /** @ngInject */
  function InformCtrl($scope,$state,$stateParams,$rootScope,Shop) {

    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    var information = $stateParams.obj;

    console.log(information);
    $scope.inform = {};
     $scope.submit=function(){
        var newinform = {
          money:$scope.inform.money,
          date:$scope.inform.date
        }
      Shop.baozhengjin.save({shopId:information._id,baozhengjinDate:$scope.inform.date,baozhengjinNum:$scope.inform.money},function(res){
        console.log("1111");
        console.log(res);
        // $state.go('ba.rulisa.ruwangshenhe',{obj:"1"});
      })
      console.log(newinform);

     }
    //  $scope.partners=
    //    {
     //
    //   		compony:info.companyName,
    //   		name:'汽车',
    //   		place:'北京',
    //   		type:'旗舰店',
    //   		person:'黎明',
    //   		phone:'13235556556'
    //   	}
    //{shopId:shop._id,baozhengjinDate:时间,baozhengjinNum:保证金数量}


    $scope.dls = {

      compony:information.basic.companyName,
      person:information.shopApplyUserId.name,
      phone:information.shopApplyUserId.cellphone,

      time:information.meta.createAt,

    }
  }
})();
