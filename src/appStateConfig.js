var app =angular.module('sample', ['ngResource', 'ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('app', {
      url: '/app',
      abstract: true,
      templateUrl: swBaseDir + "common/main.html",
      controller: 'mainController',
      cache:false,
    } );

        $stateProvider.state('app.login', {
            url: '/login',
            views:{
              mainContent:{
                  templateUrl: swBaseDir + 'login-registration/login-registration.html',
                  controller: 'loginController',
                  cache:false
              }
            },
            cache: false
        })
      
    $urlRouterProvider.otherwise('/app/login');
  
  });
  