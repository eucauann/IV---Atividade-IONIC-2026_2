angular.module('ucsalApp')

.controller('NoticiasCtrl', function($scope, $state, NoticiasService) {

  $scope.noticias = NoticiasService.listar();
  $scope.categoria = ''; // vazio = mostra tudo

  $scope.filtrar = function(cat) {
    $scope.categoria = cat;
  };

  $scope.lerMais = function(id) {
    $state.go('app.noticiaDetalhe', { id: id });
  };
})

.controller('NoticiaDetalheCtrl', function($scope, $stateParams, NoticiasService) {
  $scope.noticia = NoticiasService.buscarPorId($stateParams.id);
});
