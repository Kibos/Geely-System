(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('signOutCtrl', signOutCtrl);

  /** @ngInject */
  function signOutCtrl($scope,Auth,$cookieStore) {
    console.log('signOutCtrl');
    $scope.signout = function () {
      console.log('click');
      Auth.logout();
      console.log($cookieStore.get('role'));
    }
  }
})();
