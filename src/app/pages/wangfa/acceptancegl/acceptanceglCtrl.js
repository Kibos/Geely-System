/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.acceptancegl')
      .controller('acceptanceglCtrl', acceptanceglCtrl);

  /** @ngInject */
  function acceptanceglCtrl($scope,$state) {
    $scope.smartTablePageSize = 5;
    $scope.xq = function(item){
      if(item.state==='待提交申请'){
        console.log("待提交验收申请");
        // $state.go('ba.jiandianguanli.buildstorebtdetail',{obj:item});
      }else if(item.state==='待安排验收')
      {
        $state.go('ba.jiandianguanli.acceptanceglcheck',{obj:item});
        console.log("待安排验收");
      }else if(item.state==='待提交整改申请'){
        console.log("待提交整改申请");
      }else{
        console.log("已完成验收");
      }
};

    $scope.acceptancelists=[
  {
    agent:'杭州远景',
    type:'城市展厅',
    area:'东区-浙江省杭州市',
    state:'待提交申请',
    detail:'123456789',
  },
  {
    agent:'杭州远景',
    type:'城市展厅',
    area:'东区-上海市嘉定区',
    state:'待提交申请',
    detail:'123456789',
  },
  {
    agent:'江苏省苏州市吉利汽贸',
    type:'A级4S店',
    area:'东区-江苏省苏州市',
    state:'待安排验收',
    detail:'123456789',
  },
  {
    agent:'上海华庭',
    type:'A级4S店',
    area:'东区-上海市嘉定区',
    state:'待安排验收',
    detail:'123456789',
  },
  {
    agent:'苏州汽工贸',
    type:'A级4S店',
    area:'东区-浙江省杭州市',
    state:'待提交整改申请',
    detail:'123456789',
  },
  {
    agent:'苏州汽工贸',
    type:'A级4S店',
    area:'江苏省苏州市',
    state:'待提交整改申请',
    detail:'123456789',
  },
  {
    agent:'苏州汽工贸',
    type:'A级4S店',
    area:'东区-浙江省杭州市',
    state:'待提交申请',
    detail:'123456789',
  }

];
    $scope.acceptancelist1s=[
    {
    agent:'杭州一汽',
    type:'城市展厅',
    area:'东区-浙江省杭州市',
    state:'已完成验收',
    detail:'123456789',
    },
    {
    agent:'上海吉利',
    type:'城市展厅',
    area:'东区-上海市嘉定区',
    state:'已完成验收',
    detail:'123456789',
    },
    {
    agent:'江苏华庭',
    type:'A级4S店',
    area:'东区-江苏省苏州市',
    state:'已完成验收',
    detail:'123456789',
    },
    {
    agent:'上海华庭',
    type:'A级4S店',
    area:'东区-上海市嘉定区',
    state:'已完成验收',
    detail:'123456789',
    },
    {
    agent:'杭州汽工贸',
    type:'A级4S店',
    area:'东区-浙江省杭州市',
    state:'已完成验收',
    detail:'123456789',
    },
    {
    agent:'苏州汽工贸',
    type:'A级4S店',
    area:'江苏省苏州市',
    state:'已完成验收',
    detail:'123456789',
    },
    {
    agent:'浙江汽工贸',
    type:'A级4S店',
    area:'东区-浙江省杭州市',
    state:'已完成验收',
    detail:'123456789',
    },
    {
    agent:'广州汽工贸',
    type:'A级4S店',
    area:'东区-广州',
    state:'已完成验收',
    detail:'123456789',
    }

    ];


  }
})();
