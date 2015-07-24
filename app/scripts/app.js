'use strict';

/**
 * @ngdoc overview
 * @name pasaeAngularJsApp
 * @description
 * # pasaeAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('pasaeAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngStorage',
    'smart-table'
  ])
  .config(function ($routeProvider,$httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/profile',{
    	  templateUrl: 'views/profile.html',
    	  controller: 'ProfileCtrl'
      })
      .when('/usuario/agregar', {
        templateUrl: 'views/agregarUsuario.html',
        controller: 'UsuarioCtrl'
      })
      .when('/listadousuarios', {
        templateUrl: 'views/listadousuarios.html',
        controller: 'UsuarioCtrl'
      })
      .when('/espectaculo',{
        templateUrl: 'views/espectaculo.html',
        controller: 'EspectaculoCtrl'
      })
      .when('/espectaculo/agregar', {
         templateUrl:'views/agregarEspectaculo.html',
         controller: 'EspectaculoCtrl'
      })
      .when('/espectaculo/editar/:idespectaculo', {
         templateUrl:'views/editarEspectaculo.html',
         controller:'EspectaculoCtrl'

      })
      .when('/espectaculo/eliminar/:idespectaculo', {
                             templateUrl:'views/main.html',
                             controller:'EspectaculoCtrl'
       })
       .when('/espectaculo/info/:idespectaculo', {
               templateUrl:'views/funcion.html',
               controller:'EspectaculoCtrl'

       })
       .when('/espectaculo/info/:idespectaculo', {
                     templateUrl:'views/funcion.html',
                     controller:'EspectaculoCtrl'

        })

        .when('/categorias/:categoria', {
                       templateUrl:'views/espectaculosSegunCategoria.html',
                       controller:'MainCtrl'

        })

       .when('/funcion', {
               templateUrl:'views/funcion.html',
               controller:'FuncionCtrl'

       })

       .when('/error', {
    	  templateUrl: 'views/error.html',
    	  controller: 'ErrorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('ErrorInterceptor');
  });
