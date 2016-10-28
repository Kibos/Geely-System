/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang')
      .controller('contractsupplyCtrl', contractsupplyCtrl);

  /** @ngInject */
  function contractsupplyCtrl($scope,RoleUser,Auth) {

   var entries =RoleUser.gongUser.query(function() {
      console.log(entries);
       $scope.suppliers=entries;
  });

  $scope.formData={};
  // $scope.supplierName='';

  //  $scope.isOptional
    $scope.isOptional={show: true};
    $scope.radioClick=function(){
      if($scope.formData.radio=='true'){
          $scope.isOptional.show=true;
      }else{
          $scope.isOptional.show=false;
      }
    };
    // 显示与隐藏
    $scope.menuState={show: false};

    var obj={};
    $scope.toggleMenu=function(){
      $scope.menuState.show=!$scope.menuState.show;
      obj=Auth.getCurrentUser();
      obj.user={};
      if($scope.formData.radio=='true'){
         obj.user.gonguser = $scope.suppliers[$scope.sid]._id||"";
         obj.user.supplierName="";
      }else{
         obj.user.supplierName = $scope.formData.supplierName;
         obj.user.gonguser="";
      }
      obj.user.isOptional = ($scope.formData.radio=='true');
      obj.user.signingTime = $scope.signingTime||new Date();
      obj.user.agreementFile = $scope.agreementFile||"";

      obj.$save(function(response){
						$scope.message = response.message;
					});

      console.log(obj);

      // RoleUser.updateUser.update({id:obj._id},obj,function(){
      //      toastr.success('修改成功!');
      // });


      }

     

    // };

    // 步骤状态
    $scope.nums=['1','2','3','4','5'];
    $scope.steps=['合同上传','首付款凭证','供货商发货','供货商到货确认','供货商安装完成确认'];
    $scope.states=['合同已上传备案','首付款凭证已上传','供应商已发货','供应商已完成到货确认','供应商已完成安装确认'];

    $scope.getSuppID=function(){
      var i=0;
      while(i<this.suppliers.length){
       if(this.suppliers[i].name===this.suppmodel){
          $scope.sid =  i;
        }
        i++;
      }
    };

    
  }
})();
