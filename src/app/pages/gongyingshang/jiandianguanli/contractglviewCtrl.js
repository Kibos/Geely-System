/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.gongyingshang.jiandian')
      .controller('contractglviewCtrl', contractglviewCtrl);

  /** @ngInject */
  function contractglviewCtrl($scope,$stateParams,Auth) {
    
  var information = $stateParams.obj;
  $scope.partners=information;
    /** 代理商概览*/
    
       	// {
       	// 	id:1,
       	// 	compony:'北京xx',
       	// 	name:'汽车',
       	// 	place:'北京',
       	// 	type:'旗舰店',
       	// 	person:'黎明',
       	// 	phone:'13235556556',
       	// 	email:'1213444@qq.com'
       	// };

    // 供应商概览
    $scope.supplier = {id:'100502154',name:'浙江XX集团',person:'张三',phone:'1868989898',message:'供应商概览简介--------'};
    $scope.supplier=Auth.getCurrentUser();
    // 步骤状态
    $scope.nums=['1','2','3','4','5'];
    $scope.steps=['合同上传','首付款凭证','供货商发货','供货商到货确认','供货商安装完成确认'];
    $scope.states=['合同已上传备案','首付款凭证已上传','供应商已发货','供应商已完成到货确认','供应商已完成安装确认']


  }
})();
