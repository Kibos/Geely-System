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
  .factory('Shop',['$resource','serverUrl',function($resource,serverUrl){

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
    obj.updateUser = $resource(serverUrl.url+'/api/users/:id', null, {'update': { method:'PUT' } });
    return obj;
  }])
;
