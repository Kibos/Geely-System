/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.gongyingshang.jiandian')
      .controller('contractglCtrl', contractglCtrl);

  /** @ngInject */
  function contractglCtrl($scope) {
    $scope.smartTablePageSize = 5;
    $scope.applicants1=[
    {
        id:1,
        area:'北京',
        company:'维擎科技',
        person:'李明',
        phone:'123456789',
        state:'待上传合同',
        date:'20161006',
      },
      {
        id:2,
        area:'北京',
        company:'维擎科技',
        person:'张新华',
        phone:'123456789',
        state:'待首付款确认',
        date:'20161006',
      },
      {
        id:3,
        area:'北京',
        company:'维擎科技',
        person:'赵国栋',
        phone:'123456789',
        state:'待供货商发货',
        date:'20161006',
      },
      {
        id:4,
        area:'北京',
        company:'维擎科技',
        person:'尚军',
        phone:'123456789',
        state:'待供货商到货确认',
        date:'20161006',
      },
      {
        id:5,
        area:'北京',
        company:'维擎科技',
        person:'李煜',
        phone:'123456789',
        state:'待供货商安装完成确认',
        date:'20161006',
      },
      {
        id:6,
        area:'北京',
        company:'维擎科技',
        person:'钱多多',
        phone:'123456789',
        state:'待上传合同',
        date:'20161006',
      },
      {
        id:7,
        area:'北京',
        company:'维擎科技',
        person:'沈海',
        phone:'123456789',
        state:'待上传合同',
        date:'20161006',
      }
    ];

  }
})();
