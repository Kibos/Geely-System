/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang')
      .controller('contractsupplyCtrl', contractsupplyCtrl);

  /** @ngInject */
  function contractsupplyCtrl($scope,RoleUser,Auth,toastr,filesUrl) {
    $scope.saveDesign = function(){
      $scope.Flag = true;
    };

   $scope.formData={};
   var entries =RoleUser.gongUser.query(function() {
      console.log('sxx'+entries);
       $scope.suppliers=entries;
   });
  //  var vm= this;


  //   $scope.uploadFile = function(file){
  //     console.log($scope.indexFlag);
  //     file.upload = $upload.upload({
  //       url: vm.fileUrl+'/api/files/updateFile',
  //       file: file,
  //       data: {index: $scope.indexFlag}
  //     });

  // $scope.supplierName='';

    $scope.isOptional={show: true};
    $scope.radioClick=function(){
      if($scope.formData.radio=='true'){
          $scope.isOptional.show=true;
          $scope.reSelect = true
      }else{
          $scope.isOptional.show=false;
          $scope.Inp = true;
      }
    };
    // 显示与隐藏
    $scope.mark= true;
    $scope.flag= true;

    var obj={};
    $scope.saveClick=function(){
      $scope.Flag = true;
      $scope.mark=!$scope.mark;
      $scope.flag=!$scope.flag;
      obj=Auth.getCurrentUser();
      obj.user={};
      console.log("--------->>>"+$scope.formData.signingTime);
      if($scope.formData.radio=='true'){
        if(isUndefinedOrNull($scope.sid)||isUndefinedOrNull($scope.formData.signingTime)){
            toastr.warning('请填写完整!', '提示');
            return;
        }else{
            obj.user.gonguser = $scope.suppliers[$scope.sid]._id||"";
            obj.user.supplierName="";
            obj.user.isOptional = ($scope.formData.radio=='true');
            obj.user.signingTime = $scope.formData.signingTime||new Date();
            obj.user.agreementFile = $scope.formData.agreementFile||"";
            obj.$save(function(response){
                $scope.message = response.message;
            });

        }


      }else{
         if(isUndefinedOrNull($scope.formData.supplierName)||isUndefinedOrNull($scope.formData.signingTime)){
            toastr.warning('请填写完整!', '提示');
            return;
         }else{
           obj.user.supplierName = $scope.formData.supplierName;
           obj.user.gonguser="";
           obj.user.isOptional = ($scope.formData.radio=='true');
           obj.user.signingTime = $scope.formData.signingTime||new Date();
           obj.user.agreementFile = $scope.formData.agreementFile||"";
           obj.$save(function(response){
                $scope.message = response.message;
           });
         }

      }


      console.log(obj);

      // RoleUser.updateUser.update({id:obj._id},obj,function(){
      //      toastr.success('修改成功!');
      // });


      }

    // };

    /*合同供货流程 步骤状态*/
    //ng-repeat
    $scope.process = [
    {nums:'1',steps:'合同上传',states:' 合同已上传备案 ',bool:true},
    {nums:'2',steps:'首付款凭证',states:' 首付款凭证已上传 ',bool:true},
    {nums:'3',steps:'供货商发货',states:'供 应 商 已 发 货',bool:true},
    {nums:'4',steps:'供货商到货确认',states:'供应商已完成到货确认',bool:false},
  ];
  //最后一个步骤
    $scope.last = {
      num:'5',steps:'供货商安装完成确认',states:'供应商已完成安装确认',bool:false
    };

    //上传文件
    $scope.submitClick = function(){
      console.log("提交成功！")
    };
    //确认
    $scope.confirmClick = function(){
      console.log("确认成功！")
    };



    $scope.getSuppID=function(){
      var i=0;
      while(i<this.suppliers.length){
       if(this.suppliers[i].name===this.suppmodel){
          $scope.sid =  i;
        }
        i++;
      }
    };

    function isUndefinedOrNull(value){
      return angular.isUndefined(value) || value === null||value=="";
    };

  }
})();
