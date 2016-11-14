'use strict';

angular.module('BlurAdmin')

// Sample factory (dummy)
  .factory('factory', [function () {
    var somValue = 42;
    return {
      someMethod: function () {
        return somValue;
      }
    };
  }])
  //用户管理卖家  /api/users $resource('http://127.0.0.1:8080/api/users/:userId/privileges',
  //  {userId: '@id'},
  //  {'query':  {method:'GET', isArray:false}});


  .factory('Shop',['$resource','serverUrl','javaServerUrl', function($resource,serverUrl,javaServerUrl){

    var obj={};

    obj=$resource(serverUrl.url+'/api/shops');
    obj.baseinfo=$resource(serverUrl.url+'/api/shops/baseinfo');
    obj.updateBaseinfo=$resource(serverUrl.url+'/api/shops/updateBaseinfo');

    obj.getNotVerifyShops=$resource(serverUrl.url+'/api/shops/getNotVerifyShops',{},{isArray:true});
    obj.getShopByQuery=$resource(serverUrl.url+'/api/shops/getShopByQuery',{},{ isArray:true});
    obj.getShopByState=$resource(serverUrl.url+'/api/shops/getShopByState',{},{ isArray:true});
    obj.keyUsers=$resource(serverUrl.url+'/api/shops/keyUsers');
    obj.getShopsById=$resource(serverUrl.url+'/api/shops/getShopsById');
    obj.getShopsByuserId=$resource(serverUrl.url+'/api/shops/getShopsByuserId');
    obj.baozhengjin=$resource(serverUrl.url+'/api/shops/baozhengjin');
// http://101.201.81.214:8080/shop/getBasic/shopid/5
    //java api
    obj.saveBasic=$resource(javaServerUrl.url+'user/saveBasic');
    obj.getBasic=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getBasic/shopid/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }



    //股份构成
    obj.saveSharesconstitute=$resource(javaServerUrl.url+'shop/saveSharesconstitute');
    // http://101.201.81.214:8080/shop/getSharesconstituteByShopId/5
    obj.getSharesconstituteByShopId=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getSharesconstituteByShopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    // http://101.201.81.214:8080/shop/deleteSharesconstitute/4
    obj.deleteSharesconstitute=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/deleteSharesconstitute/'+id;
      $resource(geturl).remove(function (res) {
        cb(res);
      });

    }


    //股份构成
    obj.savePeopleinfo=$resource(javaServerUrl.url+'shop/savePeopleinfo');
    // http://101.201.81.214:8080/shop/getPeopleinfoByShopId/1
    obj.getPeopleinfoByShopId=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getPeopleinfoByShopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    // http://101.201.81.214:8080/shop/deleteSharesconstitute/4
    obj.deletePeopleinfo=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/deletePeopleinfo/'+id;
      $resource(geturl).remove(function (res) {
        cb(res);
      });

    }
    //汽车销售
    obj.saveCarshareholder=$resource(javaServerUrl.url+'shop/saveCarshareholder');
    // http://101.201.81.214:8080/shop/getPeopleinfoByShopId/1
    obj.getCarshareholderByShopId=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getCarshareholderByShopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    // http://101.201.81.214:8080/shop/deleteSharesconstitute/4
    obj.deleteCarshareholder=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/deleteCarshareholder/'+id;
      $resource(geturl).remove(function (res) {
        cb(res);
      });

    }


    //飞汽车销售
    obj.saveNotcarshareholder=$resource(javaServerUrl.url+'shop/saveNotcarshareholder');
    // http://101.201.81.214:8080/shop/getPeopleinfoByShopId/1
    obj.getNotcarshareholderByShopId=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getNotcarshareholderByShopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    // http://101.201.81.214:8080/shop/deleteSharesconstitute/4
    obj.deleteNotcarshareholder=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/deleteNotcarshareholder/'+id;
      $resource(geturl).remove(function (res) {
        cb(res);
      });

    }

     // 财务报表
    obj.saveFinancestatustable=$resource(javaServerUrl.url+'shop/saveFinancestatustable');
    // http://101.201.81.214:8080/shop/getPeopleinfoByShopId/1
    obj.getFinancestatustableByShopId=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getFinancestatustableByShopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    // http://101.201.81.214:8080/shop/deleteSharesconstitute/4
    obj.deleteFinancestatustable=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/deleteFinancestatustable/'+id;
      $resource(geturl).remove(function (res) {
        cb(res);
      });

    }

    // 销售维修状况
    obj.saveMaintenance=$resource(javaServerUrl.url+'shop/saveMaintenance');
    // http://101.201.81.214:8080/shop/getPeopleinfoByShopId/1
    obj.getMaintenanceByShopId=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getMaintenanceByShopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    // http://101.201.81.214:8080/shop/deleteSharesconstitute/4
    obj.deleteMaintenance=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/deleteMaintenance/'+id;
      $resource(geturl).remove(function (res) {
        cb(res);
      });

    }
    //资信
    obj.saveCsmessage = $resource(javaServerUrl.url+'shop/saveCsmessage');
    obj.getCsmessageByShopId=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getCsmessageByShopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }

    //建店场地
    obj.saveBss = $resource(javaServerUrl.url+'shop/saveBss');
    obj.getBss=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getBss/shopid/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    // 建店城市商圈
    obj.addbusinessarea=$resource(javaServerUrl.url+'shop/addbusinessarea');
    obj.getbusinessarea=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getbusinessarea/shopid/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    // 101.201.81.214:8080/shop/deletebusinessarea/1
    obj.deletebusinessarea=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/deletebusinessarea/'+id;
      $resource(geturl).remove(function (res) {
        cb(res);
      });

    }
    // 新公司筹备
    obj.addPrepareCompany=$resource(javaServerUrl.url+'prepareCompany/add');
// 101.201.81.214:8080/prepareCompany/shopId/5
    obj.getprepareCompany=function (id,cb) {

      var geturl = javaServerUrl.url+'prepareCompany/shopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
//股权结构101.201.81.214:8080/prepareConstruct/3
    obj.addprepareConstruct = $resource(javaServerUrl.url+'prepareConstruct/add');

// 101.201.81.214:8080/prepareConstruct/shopId/1
    obj.getprepareConstruct=function (id,cb) {

      var geturl = javaServerUrl.url+'prepareConstruct/shopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }

    obj.deprepareConstruct=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/prepareConstruct/'+id;
      $resource(geturl).remove(function (res) {
        cb(res);
      });

    }

    // 资金筹备
    obj.addprepareFinance = $resource(javaServerUrl.url+'prepareFinance/add');
    obj.getprepareFinance=function (id,cb) {

      var geturl = javaServerUrl.url+'prepareFinance/shopid/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    // 店面建设计划
    // 101.201.81.214:8080/prepareBuildPlan/add
    obj.addprepareBuildPlan = $resource(javaServerUrl.url+'prepareBuildPlan/add');

    obj.getprepareBuildPlan=function (id,cb) {

      var geturl = javaServerUrl.url+'prepareBuildPlan/shopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    obj.deprepareBuildPlan=function (id,cb) {

      var geturl = javaServerUrl.url+'prepareBuildPlan/'+id;
      $resource(geturl).remove(function (res) {
        cb(res);
      });

    }


//关键岗位 101.201.81.214:8080/prepareKeyJob/shopId/1
    // 101.201.81.214:8080/prepareBuildPlan/add
    obj.addprepareKeyJob = $resource(javaServerUrl.url+'prepareKeyJob/add');

    obj.getprepareKeyJob=function (id,cb) {

      var geturl = javaServerUrl.url+'prepareKeyJob/shopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }
    obj.deprepareKeyJob=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/prepareKeyJob/'+id;
      $resource(geturl).remove(function (res) {
        cb(res);
      });

    }

//营销预测分析 http://101.201.81.214:8080/shop/saveMfaform/
    obj.saveMfaform =  $resource(javaServerUrl.url+'shop/saveMfaform/');
    // http://101.201.81.214:8080/shop/getNotcarshareholderByShopId/1
    obj.getMfaformByShopId=function (id,cb) {

      var geturl = javaServerUrl.url+'shop/getMfaformByShopId/'+id;
      $resource(geturl).get(function (res) {
        cb(res);
      });

    }


// yinhangcun kuan http://101.201.81.214:8080/shop/saveNowbankdepositid
  obj.saveNowbankdepositid =  $resource(javaServerUrl.url+'shop/saveNowbankdepositid');
  // http://101.201.81.214:8080/shop/getNowbankdepositidByShopId/1
  obj.getNowbankdepositidByShopId=function (id,cb) {

    var geturl = javaServerUrl.url+'shop/getNowbankdepositidByShopId/'+id;
    $resource(geturl).get(function (res) {
      cb(res);
    });

  }
  obj.deleteNowbankdepositid=function (id,cb) {

    var geturl = javaServerUrl.url+'shop/deleteNowbankdepositid/'+id;
    $resource(geturl).remove(function (res) {
      cb(res);
    });

  }

    return obj;

  }])



  .factory('Designs',['$resource','serverUrl',function($resource,serverUrl){

    var obj={};

    obj=$resource(serverUrl.url+'/api/designs');
    obj.verify=$resource(serverUrl.url+'/api/designs/verify');
    obj.getShopsInit=$resource(serverUrl.url+'/api/designs/getShopsInit');
    obj.stepVerify=$resource(serverUrl.url+'/api/designs/stepVerify');

    return obj;

  }])
  //用户管理卖家  /api/users
  .factory('Audit',['$resource','serverUrl',function($resource,serverUrl){

    var obj={};

    obj=$resource(serverUrl.url+'/api/audits');
    obj.verifyDataSubmitting = $resource(serverUrl.url+'/api/audits/verifyDataSubmitting');//params : shopId
    obj.getApplyById = $resource(serverUrl.url+'/api/audits/getApplyById');//params : shopId
    obj.stepVerify = $resource(serverUrl.url+'/api/audits/stepVerify');//params : shopId
    obj.reVerifyDataSub = $resource(serverUrl.url+'/api/audits/reVerifyDataSub');//params : shopId
    return obj;


  }])
  .factory('Product', ['$resource','serverUrl',function($resource,serverUrl){
    var obj = {};
    obj = $resource(serverUrl.url+'/api/products/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/products/count', null, {'update': { method:'PUT' }});
    obj.userProduct = $resource('/api/products/user');
    return obj;
  }])
    //供应商  /api/supplier
  .factory('Supplier', ['$resource','serverUrl',function($resource,serverUrl){
    var obj = {};
    obj = $resource(serverUrl.url+'/api/supplier/:id', null, {'update': { method:'PUT' } });
    return obj;
  }])
  .factory('RoleUser', ['$resource','serverUrl',function($resource,serverUrl){
    var obj = {};
    obj.gongUser = $resource(serverUrl.url+'/api/users/gong/:_id', null, {'update': { method:'PUT' } });
    obj.daiUser = $resource(serverUrl.url+'/api/users/dai/:_id', null, {'update': { method:'PUT' } });
    obj.sheUser = $resource(serverUrl.url+'/api/users/she/:_id', null, {'update': { method:'PUT' } });

    obj.updateUser = $resource(serverUrl.url+'/api/users/:id', null, {'update': { method:'PUT' } });

    //供应商角色下 与代理商之间的合同
    obj.myContract = $resource(serverUrl.url+'/api/users/gong/contract/:_id', null, {'update': { method:'PUT' } });
    return obj;
  }])
;
