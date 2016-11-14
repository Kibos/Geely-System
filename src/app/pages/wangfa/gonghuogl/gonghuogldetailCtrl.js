/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.gonghuogl')
      .controller('gonghuogldetailCtrl', gonghuogldetailCtrl);

  /** @ngInject */
  function gonghuogldetailCtrl($scope,RoleUser,Auth,toastr,filesUrl,$stateParams,Supplier) {
    // 从上个页面传过来的代理商的信息
    var information = $stateParams.obj;
    console.log('代理商的信息'+JSON.stringify(information,null,'\t'));
    // 获取下拉框中的所有供应商信息
    // var entries =RoleUser.gongUser.query(function() {
    //    console.log('所有供应商的信息'+JSON.stringify(entries,null,'\t'));
    //     $scope.suppliers=entries;
    // });
    // 从数据库中取值
    $scope.suppliers_data = [];
    function getList() {
         Supplier.get({},function(entries) {
             $scope.suppliers_data = entries.data;
         });
       };
       getList();


    $scope.formData={};
    $scope.isOptional={show: true};
    $scope.radioClick=function(){
      if($scope.formData.radio=='true'){
          $scope.isOptional.show=true;
          $scope.reSelect = true;
      }else{
          $scope.isOptional.show=false;
          $scope.Inp = true;
      }
    };
    // 显示与隐藏
    $scope.flag= false;

    var obj={};
    $scope.saveClick=function(){
      $scope.flag=!$scope.flag;
      obj=Auth.getCurrentUser();
      obj.user={};
      console.log("签订时间--------->>>"+$scope.formData.signingTime);
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
      // 当前用户的信息，即网发的信息
      console.log(obj);

    };

    $scope.getSuppID=function(){
      var i=0;
      while(i<this.suppliers_data.length){
       if(this.suppliers_data[i].name===this.suppmodel){
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
