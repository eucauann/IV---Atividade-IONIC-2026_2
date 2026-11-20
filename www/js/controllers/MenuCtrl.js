angular.module('ucsalApp')

.controller('MenuCtrl', function($scope, $state, $rootScope, AuthService) {

  $scope.sair = function() {
    AuthService.logout();
    $rootScope.aluno = null;
    $state.go('login');
  };
});
