'use strict';

angular.module('BlurAdmin')
  .factory('User', function ($resource) {
    return $resource('http://127.0.0.1:8080/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
