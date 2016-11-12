/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.gongyingshang.jiandian')
      .controller('contractglCtrl', contractglCtrl);

  /** @ngInject */
  function contractglCtrl($scope,$state,RoleUser,Auth,$rootScope) {
    $rootScope.sidebartopfalg = false;
    $rootScope.loginflag = true ;
    $scope.smartTablePageSize = 5;

    // 查看   把当前页面的代理商的信息传给contractglview页面
    $scope.see=function(item){
      $state.go('ba.contractglview',{obj:item});
    };

    // $scope.applicants=[];
    // var entries =RoleUser.myContract.query({_id:Auth.getCurrentUser()._id},function() {
    //
    //    $scope.applicants=entries;
    //    console.log("++++>>>"+JSON.stringify(entries)+"   ......>>>"+Auth.getCurrentUser()._id);
    // });

        $scope.applicants = [
          {
            id:1,
            address:'北京',
            name:'北京吉利4S店',
            person:'李明',
            cellphone:'123456789',
            status:'待上传合同',
            updateAt:'2012/10/25'
          },
          {
            id:1,
            address:'杭州',
            name:'杭州吉利4S店',
            person:'高丽丽',
            cellphone:'123456789',
            status:'待首付款确认',
            updateAt:'2012/10/25'
          },
          {
            id:1,
            address:'天津',
            name:'天津吉利4S店',
            person:'吴丽萍',
            cellphone:'123456789',
            status:'待发货',
            updateAt:'2012/10/25'
          },
          {
            id:1,
            address:'上海',
            name:'上海吉利4S店',
            person:'马浩安',
            cellphone:'123456789',
            status:'待确认签收',
            updateAt:'2012/10/25'
          },
          {
            id:1,
            address:'湖北',
            name:'湖北吉利4S店',
            person:'李明',
            cellphone:'123456789',
            status:'待确认安装完成',
            updateAt:'2012/10/25'
          },
          {
            id:1,
            address:'石家庄',
            name:'石家庄吉利4S店',
            person:'李新华',
            cellphone:'123456789',
            status:'已结束',
            updateAt:'2012/10/25'
          }
        ];



  }
})();
