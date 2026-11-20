angular.module('ucsalApp')

.service('AlunoService', function() {

  // dados cadastrais mockados, separados pela matricula
  var dadosAlunos = {
    '200024366': {
      nome: 'Cauan Guimarães Silva',
      matricula: '200024366',
      curso: 'Engenharia de Software',
      email: 'cauan.guimaraes@ucsal.edu.br',
      telefone: '(71) 99999-0000',
      cep: '41740-090',
      rua: 'Av. Prof. Pinto de Aguiar, 2589',
      bairro: 'Pituaçu',
      cidade: 'Salvador'
    },
    '20261002': {
      nome: 'Aluno Teste',
      matricula: '20261002',
      curso: 'Engenharia de Software',
      email: 'teste@email.com',
      telefone: '(71) 98888-1111',
      cep: '40210-730',
      rua: 'Av. Cardeal da Silva, 205',
      bairro: 'Federação',
      cidade: 'Salvador'
    }
  };

  // se ja tiver algo salvo no localStorage, usa
  var salvo = localStorage.getItem('dadosAlunos');
  if (salvo) {
    dadosAlunos = JSON.parse(salvo);
  }

  this.getDados = function(matricula) {
    // devolve uma copia pra so alterar quando clicar em salvar
    return angular.copy(dadosAlunos[matricula]);
  };

  this.salvar = function(aluno) {
    dadosAlunos[aluno.matricula] = aluno;
    localStorage.setItem('dadosAlunos', JSON.stringify(dadosAlunos));
  };
});
