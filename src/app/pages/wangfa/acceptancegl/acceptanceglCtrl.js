/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.acceptancegl')
      .controller('acceptanceglCtrl', acceptanceglCtrl);

  /** @ngInject */
  function acceptanceglCtrl($scope,$state,RoleUser) {
    $scope.smartTablePageSize = 5;
// 不完善
   $scope.status=["待提交申请","待安排验收","待提交整改申请","整改申请待安排验收","已完成验收"];
   $scope.acceptancelists = [] ;
   $scope.acceptancelist1s = [] ;

   var entries =RoleUser.daiUser.query(function() {
        console.log("++++>>>"+entries.length);

    var flag = false;
    for(var i=0;i<entries.length;i++){
      flag = false;
     if(entries[i].user.status.length>=3){
        for(var j=0;j<entries[i].user.status.length;j++){
          if($scope.status[entries[i].user.status.length]=="已完成验收"){
              $scope.acceptancelist1s.push(entries[i]);
              flag=true;
              break;
          }
        }
        if(!flag){
            $scope.acceptancelists.push(entries[i]);
            console.log("---<<<<:i="+i+"  "+entries[i]);
        }
     }else{
       $scope.acceptancelists.push(entries[i]);
       console.log("---<<<<:i="+i+"  "+entries[i]);
     }
    }
   });


    $scope.xq = function(item){
    var temp=item.user.status;
    switch(temp.length||0){
      case 0: console.log("待提交验收申请"); break;
      case 1: 
          {$state.go('ba.jiandianguanli.acceptanceglcheck',{obj:item});
          console.log("待安排验收"); }break;
      case 2:  console.log("待提交整改申请"); break;
      case 3: console.log("整改申请待安排验收");break;
      case 4: console.log("已完成验收");break;
      default:console.log("END");
    }
   };


  }
})();
