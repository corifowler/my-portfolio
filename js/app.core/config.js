let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app.layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/app.main/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      templateUrl: 'templates/app.main/about.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      templateUrl: 'templates/app.main/contact.tpl.html'
    })
    .state('root.portfolio', {
      url: '/portfolio',
      templateUrl: 'templates/app.main/portfolio.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;