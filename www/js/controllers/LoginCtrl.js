angular.module('ucsalApp')

.controller('LoginCtrl', function($scope, $state, $rootScope, AuthService, AlunoService) {

  $scope.dados = {
    matricula: '',
    senha: ''
  };
  $scope.erro = '';

  $scope.entrar = function() {
    // nao deixa enviar vazio
    if (!$scope.dados.matricula || !$scope.dados.senha) {
      $scope.erro = 'Preencha a matrícula e a senha.';
      return;
    }

    if (AuthService.login($scope.dados.matricula, $scope.dados.senha)) {
      $scope.erro = '';
      // guarda o aluno logado no $rootScope pra usar no menu
      $rootScope.aluno = AlunoService.getDados($scope.dados.matricula);
      $scope.dados = { matricula: '', senha: '' };
      $state.go('app.noticias');
    } else {
      $scope.erro = 'Matrícula ou senha inválida.';
    }
  };
});
