angular.module('ucsalApp')

.service('FinanceiroService', function() {

  var semestres = ['2025.2', '2026.1', '2026.2'];

  // mensalidades mockadas, cada uma com o semestre
  var mensalidades = [
    { semestre: '2025.2', mes: 'Agosto',    vencimento: '10/08/2025', valor: 1250.00, status: 'Paga' },
    { semestre: '2025.2', mes: 'Setembro',  vencimento: '10/09/2025', valor: 1250.00, status: 'Paga' },
    { semestre: '2025.2', mes: 'Outubro',   vencimento: '10/10/2025', valor: 1250.00, status: 'Paga' },
    { semestre: '2025.2', mes: 'Novembro',  vencimento: '10/11/2025', valor: 1250.00, status: 'Paga' },

    { semestre: '2026.1', mes: 'Fevereiro', vencimento: '10/02/2026', valor: 1320.00, status: 'Paga' },
    { semestre: '2026.1', mes: 'Março',     vencimento: '10/03/2026', valor: 1320.00, status: 'Paga' },
    { semestre: '2026.1', mes: 'Abril',     vencimento: '10/04/2026', valor: 1320.00, status: 'Paga' },
    { semestre: '2026.1', mes: 'Maio',      vencimento: '10/05/2026', valor: 1320.00, status: 'Paga' },

    { semestre: '2026.2', mes: 'Agosto',    vencimento: '10/08/2026', valor: 1320.00, status: 'Paga' },
    { semestre: '2026.2', mes: 'Setembro',  vencimento: '10/09/2026', valor: 1320.00, status: 'Paga' },
    { semestre: '2026.2', mes: 'Outubro',   vencimento: '10/10/2026', valor: 1320.00, status: 'A Pagar',
      codigoBarras: '23793.38128 60012.345678 90000.123456 1 98760000132000' },
    { semestre: '2026.2', mes: 'Novembro',  vencimento: '10/11/2026', valor: 1320.00, status: 'A Pagar',
      codigoBarras: '23793.38128 60012.345678 90000.654321 7 99070000132000' }
  ];

  this.getSemestres = function() {
    return semestres;
  };

  this.getMensalidades = function() {
    return mensalidades;
  };
});
