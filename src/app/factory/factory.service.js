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
    obj=$resource('http://127.0.0.1:8080/api/shops');
    obj.baseinfo=$resource('http://127.0.0.1:8080/api/shops/baseinfo');
    obj.getNotVerifyShops=$resource('http://127.0.0.1:8080/api/shops/getNotVerifyShops',{},{isArray:true});
    obj.getShopByQuery=$resource('http://127.0.0.1:8080/api/shops/getShopByQuery',{},{ isArray:true});
    obj.keyUsers=$resource('http://127.0.0.1:8080/api/shops/keyUsers');
    obj.getShopsById=$resource('http://127.0.0.1:8080/api/shops/getShopsById');
    obj.getShopsByuserId=$resource('http://127.0.0.1:8080/api/shops/getShopsByuserId');

    return obj;

  }])

  .factory('Designs',['$resource',function($resource){

    var obj={};
    obj=$resource('http://127.0.0.1:8080/api/designs');
    return obj;

  }])
  //用户管理卖家  /api/users
  .factory('Audit',['$resource',function($resource){

    var obj={};
    obj=$resource('http://127.0.0.1:8080/api/audits');
    obj.verifyDataSubmitting = $resource('http://127.0.0.1:8080/api/audits/verifyDataSubmitting');//params : shopId
    obj.stepVerify = $resource('http://127.0.0.1:8080/api/audits/stepVerify');//params : shopId

    return obj;

  }])
  .factory('Product', ['$resource', function($resource) {
    var obj = {};
    obj = $resource('http://127.0.0.1:8080/api/products/:id', null, {'update': { method:'PUT' } });
    obj.count = $resource('/api/products/count', null, {'update': { method:'PUT' }});
    obj.userProduct = $resource('/api/products/user');
    return obj;
  }])
;
