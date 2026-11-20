angular.module('ucsalApp')

.service('NoticiasService', function() {

  var noticias = [
    {
      id: 1,
      titulo: 'Prazo de rematrícula 2027.1',
      data: '18/11/2026',
      categoria: 'Notícia',
      imagem: 'img/campus.jpg',
      texto: 'O período de rematrícula para o semestre 2027.1 vai até 15/12. Acesse o portal e confirme suas disciplinas para não perder a vaga.'
    },
    {
      id: 2,
      titulo: 'Edital de Iniciação Científica',
      data: '10/11/2026',
      categoria: 'Notícia',
      imagem: 'img/noticia2.jpg',
      texto: 'Estão abertas as inscrições para o programa de Iniciação Científica. Os alunos interessados devem procurar um orientador e enviar o projeto até o fim do mês.'
    },
    {
      id: 3,
      titulo: 'SEMOC 2026',
      data: '05/11/2026',
      categoria: 'Evento',
      imagem: 'img/evento1.jpg',
      texto: 'A Semana de Mobilização Científica acontece no campus de Pituaçu, com palestras, apresentações de trabalhos e minicursos.'
    },
    {
      id: 4,
      titulo: 'Maratona de Programação',
      data: '28/10/2026',
      categoria: 'Evento',
      imagem: 'img/evento2.jpg',
      texto: 'Os alunos de Engenharia de Software vão representar a UCSal na maratona regional de programação. As equipes podem se inscrever na coordenação.'
    }
  ];

  this.listar = function() {
    return noticias;
  };

  this.buscarPorId = function(id) {
    for (var i = 0; i < noticias.length; i++) {
      if (noticias[i].id == id) {
        return noticias[i];
      }
    }
    return null;
  };
});
