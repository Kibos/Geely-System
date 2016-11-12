/**
 * @author sunxuanxuan
 * created on 12.11.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang.jiandiangl')
      .controller('acceptancesqCtrl', acceptancesqCtrl);

  /** @ngInject */
  function acceptancesqCtrl($scope,$state,$stateParams, $rootScope, $upload, $timeout, Auth, Shop, $filter, $http,filesUrl) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;

    // 获取当前的用户信息   即当前登录的代理商的信息
    $scope.currentUser = Auth.getCurrentUser();
    console.log('当前登录的代理商的信息'+JSON.stringify($scope.currentUser,null,'\t'));

    Shop.getShopsByuserId.get({id:$scope.currentUser._id},function(data){
        console.log(data);
        $scope._dbid = data._id;
        $scope.yanshouFile = data.yanshouFile;

    });

    // 文件上传   开始 file upload
    $scope.fileList = [];
    var fileArray = [];
    $scope.$watch('files',function(f){
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
        url: filesUrl.url+'/api/files/updateFile',
        file: file
      });

      file.upload.then(function(response) {
        $timeout(function(){
          file.result = response.data;
          fileArray.push(response.data)


          var allmessage = {
            yanshouFile:file.result
          }
          Shop.updateBaseinfo.save({shopId:$scope._dbid, baseinfo:allmessage},function(err, res){
              console.log('updateBaseinfo')
              console.log(err);
              console.log(res);
          })

          // Product.productImages.save({pid:$scope.pid, image:response.data}, function(res){
          //   })
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
