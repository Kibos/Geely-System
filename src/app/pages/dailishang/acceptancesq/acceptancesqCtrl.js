/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang')
      .controller('acceptancesqCtrl', acceptancesqCtrl);

  /** @ngInject */
  function acceptancesqCtrl($scope,$state,$stateParams, $rootScope, $upload, $timeout, Auth, Shop) {

    $scope.currentUser = Auth.getCurrentUser();

    console.log($scope.currentUser)

    Shop.getShopsByuserId.get({id:$scope.currentUser._id},function(data){
        console.log(data);
              // console.log(data);
        $scope._dbid = data._id;

    })


    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.agent='杭州风景';
    $scope.submit=function () {
      // $state.go('components.acceptanceCheck');
      var acceptance={
          agent:$scope.agent,
          file:$scope.file,
      }
      console.log(acceptance);

    }



    // 文件上传   开始 file upload
    $scope.fileList = [];
    var fileArray = [];
    $scope.$watch('files', function (f) {
      if(f&&f[0]) {
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

    $scope.upload = function (files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          file.dynamic = 0;
          $scope.uploadFile(file);
        }
      }
    };

    $scope.uploadFile = function(file){

      file.upload = $upload.upload({
        url: 'http://127.0.0.1:8080/api/files/updateFile',
        file: file
      });

      file.upload.then(function(response) {
        $timeout(function() {
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
