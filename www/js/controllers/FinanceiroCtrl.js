angular.module('ucsalApp')

.controller('FinanceiroCtrl', function($scope, $ionicPopup, FinanceiroService) {

  $scope.semestres = FinanceiroService.getSemestres();
  $scope.mensalidades = FinanceiroService.getMensalidades();

  // comeca no semestre atual
  $scope.filtro = {
    semestre: '2026.2'
  };

  $scope.copiarCodigo = function(parcela) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(parcela.codigoBarras);
    }

    $ionicPopup.alert({
      title: 'Código copiado!',
      template: parcela.codigoBarras
    });
  };
});
