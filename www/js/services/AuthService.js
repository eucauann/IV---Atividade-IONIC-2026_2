angular.module('ucsalApp')

.service('AuthService', function() {

  // alunos mockados (login)
  var alunos = [
    { matricula: '20261001', senha: '123456' },
    { matricula: '20261002', senha: 'ucsal123' }
  ];

  var alunoLogado = null;

  this.login = function(matricula, senha) {
    for (var i = 0; i < alunos.length; i++) {
      if (alunos[i].matricula === matricula && alunos[i].senha === senha) {
        alunoLogado = alunos[i];
        return true;
      }
    }
    return false;
  };

  this.logout = function() {
    alunoLogado = null;
  };

  this.estaLogado = function() {
    return alunoLogado !== null;
  };

  this.getAlunoLogado = function() {
    return alunoLogado;
  };
});
