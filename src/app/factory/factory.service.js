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
  .factory('Shop',['$resource',function($resource){

    var obj={};
    obj=$resource('/api/shops');
    obj.baseinfo=$resource('/api/shops/baseinfo');
    obj.getNotVerifyShops=$resource('/api/shops/getNotVerifyShops',{},{isArray:true});
    obj.getShopByQuery=$resource('/api/shops/getShopByQuery',{},{ isArray:true});
    obj.keyUsers=$resource('/api/shops/keyUsers');
    obj.getShopsById=$resource('/api/shops/getShopsById');
    obj.getShopsByuserId=$resource('/api/shops/getShopsByuserId');

    return obj;

  }])



  .factory('Designs',['$resource',function($resource){

    var obj={};
    obj=$resource('/api/designs');
    obj.verify=$resource('/api/designs/verify');
    obj.getShopsInit=$resource('/api/designs/getShopsInit');
    obj.stepVerify=$resource('/api/designs/stepVerify');
    return obj;

  }])
  //用户管理卖家  /api/users
  .factory('Audit',['$resource',function($resource){

    var obj={};
    obj=$resource('/api/audits');
    obj.verifyDataSubmitting = $resource('/api/audits/verifyDataSubmitting');//params : shopId
    obj.getApplyById = $resource('/api/audits/getApplyById');//params : shopId
    obj.stepVerify = $resource('/api/audits/stepVerify');//params : shopId

    return obj;

  }])
  .factory('Product', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('/api/products/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/products/count', null, {'update': { method:'PUT' }});
    obj.userProduct = $resource('/api/products/user');
    return obj;
  }])
;
