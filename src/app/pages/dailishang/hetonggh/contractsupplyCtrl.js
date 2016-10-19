/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dailishang')
      .controller('contractsupplyCtrl', contractsupplyCtrl);

  /** @ngInject */
  function contractsupplyCtrl($scope) {

    //设计厂商概要
    // $scope.firm = {id:'100502154',name:'浙江XX集团',person:'张三',phone:'1868989898',message:'供应商概览简介--------'};

    //供应商概览
    $scope.suppliers = [{id:1,code:'100502154',name:'富士康集团',person:'小明',phone:'1868989898',message:'苹果专用供应商'},
                        {id:2,code:'100502154',name:'夏普集团',person:'Ben',phone:'1868989811',message:'夏普专用供应商'},
                        {id:3,code:'100502154',name:'LG集团',person:'Luly',phone:'1868989822',message:'LG专用供应商'},
                        {id:4,code:'100502154',name:'三星集团',person:'张三',phone:'1868989833',message:'三星专用供应商'},
                        {id:5,code:'100502154',name:'联想集团',person:'小王',phone:'1868989844',message:'联想专用供应商'}
    ];

    // 显示与隐藏
    $scope.menuState={show: false};
    $scope.toggleMenu=function(){
      $scope.menuState.show=!$scope.menuState.show;
    };

    // 步骤状态
    $scope.nums=['1','2','3','4','5'];
    $scope.steps=['合同上传','首付款凭证','供货商发货','供货商到货确认','供货商安装完成确认'];
    $scope.states=['合同已上传备案','首付款凭证已上传','供应商已发货','供应商已完成到货确认','供应商已完成安装确认'];


   $scope.suppmodel="富士康集团";

   $scope.$watch('suppmodel',  function(newValue, oldValue) {

      console.log(" id 11 ++" +newValue);
      if (newValue === oldValue) { return; } // AKA first run
        for(var x in $scope.suppliers){
        if(x.name===$scope.suppmodel){
          $scope.sid =  $scope.suppliers[x].id;
          console.log(" id "+$scope.sid+" "+ x );
        }
      }
   });

  

    // $scope.getSuppID=function(){
    //    console.log(" id 1122" +$scope.suppmodel );
    //   // $scope.supp=suppliers

    //   for(var x in $scope.suppliers){
    //     if($scope.suppliers[x].name===$scope.suppmodel){
    //       $scope.sid =  x;
    //       console.log(" id "+x.id +x+"  "+$scope.suppmodel);
    //     }
    //   }
    // }
    
  }
})();
