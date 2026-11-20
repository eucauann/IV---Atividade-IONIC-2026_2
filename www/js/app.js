// modulo principal do app
angular.module('ucsalApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    // estado abstrato que tem o menu lateral
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'MenuCtrl'
    })

    .state('app.noticias', {
      url: '/noticias',
      views: {
        'menuContent': {
          templateUrl: 'templates/noticias.html',
          controller: 'NoticiasCtrl'
        }
      }
    })

    .state('app.noticiaDetalhe', {
      url: '/noticias/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/noticia-detalhe.html',
          controller: 'NoticiaDetalheCtrl'
        }
      }
    })

    .state('app.perfil', {
      url: '/perfil',
      views: {
        'menuContent': {
          templateUrl: 'templates/perfil.html',
          controller: 'PerfilCtrl'
        }
      }
    })

    .state('app.financeiro', {
      url: '/financeiro',
      views: {
        'menuContent': {
          templateUrl: 'templates/financeiro.html',
          controller: 'FinanceiroCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/login');
})

// se nao estiver logado, volta pro login
.run(function($rootScope, $state, AuthService) {
  $rootScope.$on('$stateChangeStart', function(event, toState) {
    if (toState.name !== 'login' && !AuthService.estaLogado()) {
      event.preventDefault();
      $state.go('login');
    }
  });
});
