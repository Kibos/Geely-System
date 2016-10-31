/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.manufacturerManage')
      .controller('gysxxCtrl', gysxxCtrl);

  /** @ngInject */
  function gysxxCtrl($scope,$state,$stateParams,$rootScope,editableOptions, editableThemes,RoleUser,toastr) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    var info =angular.copy($stateParams.obj);
    console.log("----->>>"+JSON.stringify(info)   );
    $scope.gysxx = $stateParams.obj;

    // console.log(information.name);
    // $scope.gysxx = {
    //   name:information.name||"",
    //   address:information.gonguser.address||"",
    //   person:information.gonguser.ownName||"",
    //   phone:information.phone||"",
    //   time:information.createAt||"",
    //   number:information.gonguser.number||0
    // };
    	$scope.returnBack=function(){
    		$state.go('ba.hezuohuoban.gongyingshang');
    	};

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

     $scope.flag = true;
     //编辑
     $scope.editClick = function(){
       $scope.flag = !$scope.flag;
       $scope.isActive = false;
     };
     //取消
     $scope.cancelClick = function(){
       $scope.flag = !$scope.flag;
       $scope.gysxx = info;
     };
     //保存
     $scope.saveClick = function(){
       $scope.flag = !$scope.flag;


     console.log("------????>>"+JSON.stringify($scope.gysxx));
      //  $scope.gysxx.$save(function(response){
      //       $scope.message = response.message;
      //  });

       RoleUser.gongUser.save({_id:$scope.gysxx._id},$scope.gysxx,function(response){ 
          toastr.success('更新成功!');      
       });

     }


  }
})();
