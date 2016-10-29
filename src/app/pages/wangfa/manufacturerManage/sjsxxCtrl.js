/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('sjsxxCtrl', sjsxxCtrl);

  /** @ngInject */
  function sjsxxCtrl($scope,$state,$stateParams,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    var info =angular.copy($stateParams.obj);
    console.log("----->>>"+JSON.stringify(info)   );
    $scope.sjsxx = $stateParams.obj;

    // console.log(information.name);
    // $scope.sjsxx = {
    //   name:information.name||"",
    //   address:information.gonguser.address||"",
    //   person:information.gonguser.ownName||"",
    //   phone:information.phone||"",
    //   time:information.createAt||"",
    //   number:information.gonguser.number||0
    // };

      //返回
    	$scope.returnBack=function(){
    		$state.go('ba.hezuohuoban.shejichang');
    	};

     $scope.flag = true;
     //编辑
     $scope.editClick = function(){
       $scope.flag = !$scope.flag;
       $scope.isActive = false;
     };
     //取消
     $scope.cancelClick = function(){
       $scope.flag = !$scope.flag;
       $scope.sjsxx = info;
     };
     //保存
     $scope.saveClick = function(){
       $scope.flag = !$scope.flag;

       $scope.sjsxx.$save(function(response){
            $scope.message = response.message;
       });

     }



  }
})();
