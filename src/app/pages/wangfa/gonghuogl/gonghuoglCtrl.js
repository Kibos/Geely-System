/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wangfa.gonghuogl')
      .controller('gonghuoglCtrl', gonghuoglCtrl);

  /** @ngInject */
  function gonghuoglCtrl($scope,$state) {
    $scope.smartTablePageSize = 5;
    $scope.xq = function(item){
      if(item.state==='待安排供应商'){
        $state.go('ba.jiandianguanli.gonghuogldetail',{obj:item});
      }else if(item.state==='已安排供应商')
      {
      $state.go('ba.jiandianguanli.gonghuogldetail',{obj:item});
      }else{

      }
};

    $scope.acceptancelists=[
  {
    agent:'杭州远景',
    type:'城市展厅',
    area:'东区-浙江省杭州市',
    state:'待安排供应商',
    detail:'123456789',
  },
  {
    agent:'杭州远景',
    type:'城市展厅',
    area:'东区-上海市嘉定区',
    state:'待安排供应商',
    detail:'123456789',
  },
  {
    agent:'上海华庭',
    type:'A级4S店',
    area:'东区-江苏省苏州市',
    state:'已安排供应商',
    detail:'123456789',
  },
  {
    agent:'上海华庭',
    type:'A级4S店',
    area:'东区-上海市嘉定区',
    state:'已安排供应商',
    detail:'123456789',
  },
  {
    agent:'苏州汽工贸',
    type:'A级4S店',
    area:'东区-浙江省杭州市',
    state:'已安排供应商',
    detail:'123456789',
  },
  {
    agent:'苏州汽工贸',
    type:'A级4S店',
    area:'江苏省苏州市',
    state:'已安排供应商',
    detail:'123456789',
  },
  {
    agent:'苏州汽工贸',
    type:'A级4S店',
    area:'东区-浙江省杭州市',
    state:'待安排供应商',
    detail:'123456789',
  }

];


  }
})();
