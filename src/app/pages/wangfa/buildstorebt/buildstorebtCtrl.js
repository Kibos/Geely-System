/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.buildstorebt')
      .controller('buildstorebtCtrl', buildstorebtCtrl);

  /** @ngInject */
  function buildstorebtCtrl($scope,$state) {
    $scope.smartTablePageSize = 5;
    $scope.xq = function(item){
      if(item.state==='待设置'){
        $state.go('ba.jiandianguanli.buildstorebtdetail',{obj:item});
      }else if(item.state==='待审批')
      {
        $state.go('ba.jiandianguanli.buildstorebtcheck',{obj:item});
      }else{

      }
};

    $scope.acceptancelists=[
  {
    agent:'杭州远景',
    type:'城市展厅',
    area:'东区-浙江省杭州市',
    state:'待设置',
    detail:'123456789',
  },
  {
    agent:'杭州远景',
    type:'城市展厅',
    area:'东区-上海市嘉定区',
    state:'待设置',
    detail:'123456789',
  },
  {
    agent:'上海华庭',
    type:'A级4S店',
    area:'东区-江苏省苏州市',
    state:'待审批',
    detail:'123456789',
  },
  {
    agent:'上海华庭',
    type:'A级4S店',
    area:'东区-上海市嘉定区',
    state:'待审批',
    detail:'123456789',
  },
  {
    agent:'苏州汽工贸',
    type:'A级4S店',
    area:'东区-浙江省杭州市',
    state:'已通过',
    detail:'123456789',
  },
  {
    agent:'苏州汽工贸',
    type:'A级4S店',
    area:'江苏省苏州市',
    state:'已通过',
    detail:'123456789',
  },
  {
    agent:'苏州汽工贸',
    type:'A级4S店',
    area:'东区-浙江省杭州市',
    state:'待设置',
    detail:'123456789',
  }

];


  }
})();
