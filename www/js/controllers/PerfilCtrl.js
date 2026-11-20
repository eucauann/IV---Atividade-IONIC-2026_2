angular.module('ucsalApp')

.controller('PerfilCtrl', function($scope, $rootScope, $ionicPopup, AuthService, AlunoService) {

  var matricula = AuthService.getAlunoLogado().matricula;
  $scope.aluno = AlunoService.getDados(matricula);

  $scope.salvar = function() {
    AlunoService.salvar($scope.aluno);
    $rootScope.aluno = angular.copy($scope.aluno);

    $ionicPopup.alert({
      title: 'Sucesso',
      template: 'Dados atualizados!'
    });
  };
});
