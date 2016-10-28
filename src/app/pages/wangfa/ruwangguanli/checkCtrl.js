/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.ruwangguanlisk')
      .controller('CheckCtrl', CheckCtrl);

    /** @ngInject */
    function CheckCtrl($scope,$state,$stateParams,$rootScope,Auth,Audit,localStorageService, filesUrl , $upload, $timeout, Shop) {
      $scope.fileUrl = filesUrl.url;
      var shop = $stateParams.obj;
      $scope.shop = shop;

      console.log(shop.jzcfhxFile[0]);
      if(shop){
        localStorageService.set('checkshop', shop);
      }else{
        shop = localStorageService.get('checkshop')
      }


      console.log(shop)

      $scope.user = Auth.getCurrentUser()

      var state = [
        '开发经理审核',
        '开发大区经理审核',
        '实地考察审核（上传评估报告)',
        '内部评审会',
        '陈述会结果审核',
        '合作商入网审批'
      ]

      $scope.paneltitle = state[shop.applyId.verify.length-1];


      $scope.options = {
        pass: false,
      };
      $scope.info = {
        description: ''
      };
      $scope.submit=function(){
      	// $state.go('components.audit');
        var flag = null;
        if( $scope.options.pass === 'true'){
          flag = true;
        } else {
          flag = false;
        }
        // todo add role to info
        var isVerify = false;
        if(state[shop.applyId.verify.length-1]==='合作商入网审批'){
          isVerify = true;
        }
        var verInfo = {
         name:$scope.user.name,
         userId:$scope.user._id,
         time:Date.now(),
         info:state[shop.applyId.verify.length-1],
         bool:flag,
         step:shop.applyId.verify.length,
         opinion: $scope.info.description,
         fileName: $scope.fileArray[0]
       }
       console.log(verInfo);
        var post = {applyId:shop.applyId._id, verify:verInfo, shopId:shop._id, isVerify:isVerify}
        Audit.stepVerify.save(post,function(res){
          // console.log(res);
          localStorageService.remove('checkshop');
          $state.go('ba.rulisa.ruwangshenhe');
        })
      }
      $scope.cancel=function(){
        localStorageService.remove('checkshop');
      	$state.go('ba.rulisa.ruwangshenhe');
      }

  //-------------展开历史记录------------
      $scope.showflag=false;
      $scope.change=function(){
          $scope.showflag=!$scope.showflag;

      }
  //---------------基本信息--------------
      $scope.agent = shop.basic;
  //--------- 股份构成----------------
      $scope.SharesConstitute = shop.SharesConstitute;
  //------------ 关键人员背景------------
      $scope.users = shop.users;
  //-----------拟建店简述  建店场地情况----
      $scope.store = shop.bss;
  // ---------------拟建店筹备  新公司筹备--------

      $scope.newCompany = shop.newCP;


      if(shop.funding)
        {
          $scope.cashDeposit = {
          Sum : shop.funding.cashDeposit.cashDepositSum,
          ArriveTime : shop.funding.cashDeposit.cashDepositArriveTime,
          Remark : shop.funding.cashDeposit.cashDepositRemark
          };


          $scope.mentionModels = {
            Sum : shop.funding.mentionModels.mentionModelsSum,
            ArriveTime : shop.funding.mentionModels.mentionModelsArriveTime,
            Remark : shop.funding.mentionModels.mentionModelsRemark
          }
        }

     $scope.checkLog = shop.applyId.verify.slice(1)
     $scope.isornotinfo = function (bl) {
       if(bl){
         return '通过'
       } else {
         return '不通过'
       }
     }

     $scope.saloonCar = [
        {
        salesTarget:shop.MFAform.salesTarget,
        forecastOne:shop.MFAform.forecastOne,
        forecastTwo:shop.MFAform.forecastTwo
     }
     ] 
     console.log(shop.MFAform.salesTarget);
     $scope.analyze = {
      marketingAnalysis:shop.MFAform.marketingAnalysis
     }

     var vm = this;
     vm.fileUrl = filesUrl.url;

     // 文件上传   开始 file upload
     $scope.fileList = [];
     $scope.fileArray = [];
     $scope.$watch('vm.files',function(f){
       console.log('change');
       if(f&&f[0]){
         $scope.upload(f);
         angular.forEach(f, function(file){
           $scope.fileList.push(file);
         })
       }
     });

     // $scope.removeFile = function(fileName) {
     //   angular.forEach($scope.fileList, function(f, index){
     //     if(f.name == fileName){
     //       $scope.fileList.splice(index, 1);
     //       return;
     //     }
     //   });
     // };

     // 参数是数组
     $scope.upload = function (files){
       if (files && files.length) {
         for (var i = 0; i < files.length; i++) {
           var file = files[i];
           file.dynamic = 0;
           $scope.uploadFile(file);
         }
       }
     };
     // 参数是文件
     $scope.uploadFile = function(file){

       file.upload = $upload.upload({
         url: vm.fileUrl+'/api/files/updateFile',
         file: file
       });

       file.upload.then(function(response) {
         $timeout(function(){
           file.result = response.data;
           $scope.fileArray[0] = (response.data)

           });
       }, function(response) {});

       file.upload.progress(function(evt) {
         // Math.min is to fix IE which reports 200% sometimes
         file.dynamic = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
       });

       // file.upload.xhr(function(xhr) {
       //   // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
       // });
     };

     // 文件上传结束




    }
})();
