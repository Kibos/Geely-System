'use strict';

angular.module('BlurAdmin')
<<<<<<< HEAD
  .factory('User', function ($resource,serverUrl) {
    return $resource(serverUrl.url+'/api/users/:id/:controller', {
=======
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
>>>>>>> d737c708e9e7e8587c4e55cef4d5ff5bde8dbb6f
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
