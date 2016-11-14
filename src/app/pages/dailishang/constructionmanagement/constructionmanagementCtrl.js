/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.ruwangguanlia')
      .controller('constructionmanagementCtrl', constructionmanagementCtrl);

  /** @ngInject */
  function constructionmanagementCtrl($scope, $timeout, $filter,$uibModal,$upload,filesUrl){
  
  //////////////////////////////////施工准备///////////////////////////////////////////////
    //文件上传开始
    $scope.flag=false;
    $scope.Column='';
    $scope.fileIndex = function(Column){
      $scope.Column = Column;
    }
    var vm = this;
    vm.fileUrl = filesUrl.url;
    $scope.$watch('vm.files',function(newfile){
      $scope.flag=false;
      if(newfile){
        $scope.upload(newfile);
      }
    });
    $scope.upload=function(files){
      if (files && files.length){
        for (var i = 0; i < files.length; i++){
          var file = files[i];
          $scope.uploadFile(file);
        }
      }
    };
    var fileArray={};
    $scope.shop={};
    $scope.uploadFile = function(file){
      file.upload = $upload.upload({
        url: vm.fileUrl+'/api/files/updateFile',
        file:file,
        data:{index:$scope.Column}
      }).success(function(data,status,headers,config){
          $scope.flag=true;
          var Column=$scope.Column;
          fileArray[Column]=data;
          vm.saveFile();
      }).error(function(data, status, headers, config){
          console.log("上传失败");
      })
    };
    vm.saveFile = function (Column){
      var allmessage = {}
      var key=$scope.Column;
      if(fileArray==={}){
        return;
      }else{
        // 本地显示
        $scope.filedata=fileArray;
        console.log($scope.filedata);
        if (key=="inputfile"){
          $scope.inputfile=$scope.filedata;
        }else if (key=="CivilTender"){
          $scope.CivilTender=$scope.filedata;
        }else if (key=="decorateTender"){
          $scope.decorateTender=$scope.filedata;
        }else if (key=="application"){
          $scope.application=$scope.filedata;
        }else if (key=="firefighting"){
          $scope.firefighting=$scope.filedata;
        }else if(key=="jobSite"){
          $scope.jobSite=$scope.filedata;
        }
        allmessage[key]=fileArray;
        if($scope.flag){
          // 文件保存数据库
          // 调用获取到的信息
        }
      }
      fileArray = {};
    }
  //文件上传结束
  //施工准备
  $scope.sgSetout={};
  $scope.filelist=false;
  $scope.constructPlanform=function(sgPlanform){
    $scope.sgPlansubmit=true;
    if (sgPlanform.$valid&&$scope.CivilTender!=""&&$scope.decorateTender!=""&&$scope.application!=""&&$scope.firefighting!=""){
      $scope.filelist=false;
      var sgPlan={
        TheGauge:$scope.sgSetout.TheGauge,
        EIA:$scope.sgSetout.EIA,
        CivilTender:$scope.CivilTender,
        decorateTender:$scope.decorateTender,
        application:$scope.application,
        firefighting:$scope.firefighting
      }
      console.log(sgPlan);
    }else{
      $scope.filelist=true;
    }
  }
  //////////////////////////////施工图/////////////////////////////////////////////
  $scope.masksggl=true;
  $scope.final={
    agent:"吉利汽贸店",
    newshop:"杭州吉利4s店",
    designer:"杭州设计院",
    submitter:"李响",
    submitTime:"2016/17/18",
    status:"未审核",
    jsjqbook:""
  }
  // 表单信息
  $scope.finalfame=function(stateform){
    $scope.submitfinal=true;
    if ($scope.inputfile){
      $scope.masksggl=false;
      var finalfile={
        final:$scope.inputfile
      }
    }
  }
  //文件上传取消
  vm.removeFile=function(){
      $scope.inputfile="";
  }
//////////////////////////////施工周报/////////////////////////////////////////////////
//数据获取
  $scope.weeks = [
      {
        stage: "阶段一",
        time: "2016.1.1~2016.3.1",
        work:"完成实地的勘探以及外墙建设，确保工程质量和进度完成实地的勘探以及外墙建",
        weeklys:['12341234','21341','234234','21341235234','{aa:12345}','["waerfqawrf"]']
      },
      {
        stage: "阶段二",
        time: "2016.1.1~2016.3.1",
        work:"完成实地的勘探以及外墙建设，确保工程质量和进度",
        weeklys:""
      },
      {
        stage: "阶段三",
        time: "2016.1.1~2016.3.1",
        work:"完成实地的勘探以及外墙建设，确保工程质量和进度",
        weeklys:""
      },
      {
        stage: "阶段四",
        time: "2016.1.1~2016.3.1",
        work:"完成实地的勘探以及外墙建设，确保工程质量和进度",
        weeklys:""
      }
    ];
//弹窗跳转
    // $scope.open = function (page, size){
    //   $uibModal.open({
    //     animation: true,
    //     templateUrl:page,
    //     size: size,
    //     resolve: {
    //       items: function(){
    //         return $scope.items;
    //       }
    //     }
    //   });
    //   console.log($scope.items);
    // };











    $scope.open = function (page,size){
      $uibModal.open({
        animation:true,
        templateUrl:page,
        controller:function($uibModalInstance,$scope,filesUrl){
            //文件上传开始
                $scope.flag=false;
                $scope.fileUrl = filesUrl.url;
                $scope.$watch('vm.files',function(newfile){
                  $scope.flag=false;
                  if(newfile){
                    $scope.upload(newfile);
                  }
                });
                $scope.upload=function(files){
                  if (files && files.length){
                    for (var i = 0; i < files.length; i++){
                      var file = files[i];
                      $scope.uploadFile(file);
                    }
                  }
                };
                $scope.uploadFile = function(file){
                  file.upload = $upload.upload({
                    url:vm.fileUrl+'/api/files/updateFile',
                    file:file
                  }).success(function(data,status,headers,config){
                      $scope.flag=true;
                      $scope.jobSite=data;
                  }).error(function(data, status, headers, config){
                      console.log("上传失败");
                  })
                };
            //文件上传结束 
            $scope.Weeklyform=function(Weekly){
                $scope.submitWeekly=true;
                console.log("周报信息提交");
                var Weekly={
                    Weekly:$scope.summarize,
                    jobSite:$scope.jobSite
                }
                console.log(Weekly);
                $uibModalInstance.dismiss('cancel');
            }







            
          },
        size:size,
        resolve:{
          items:function(){
            return $scope.weeks;
          }
        }




      });
    };













//弹窗表单
    $scope.Weeklyform=function(Weekly){
      $scope.submitWeekly=true;
      console.log("周报信息提交");
      var Weekly={

      }
    }



  }
})();
