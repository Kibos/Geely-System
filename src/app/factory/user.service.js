'use strict';

angular.module('BlurAdmin')
  .factory('User', function ($resource,serverUrl,javaServerUrl) {
    // return $resource(serverUrl.url+'/api/users/:id/:controller', {
    //   id: '@_id'
    // },
    // {
    //   changePassword: {
    //     method: 'PUT',
    //     params: {
    //       controller:'password'
    //     }
    //   },
    //   get: {
    //     method: 'GET',
    //     params: {
    //       id:'me'
    //     }
    //   }
	  // });

    console.log('user-factory');
    var obj={};

    obj=$resource(javaServerUrl.url+'register');
    // 101.201.81.214:8080/user/findUser/1

    obj.getUserInfo=function (id,cb) {
      $resource(javaServerUrl.url+'user/findUser/'+id).get(function (res) {
        console.log('getUserInfo')
        console.log(res)
        cb(res.data) ;
      });
    }


    return obj;




  });
