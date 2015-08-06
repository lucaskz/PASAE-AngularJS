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
    'angularUtils.directives.dirPagination'
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
      .when('/perfil/editardatos',{
    	  templateUrl: 'views/editarPerfil.html',
    	  controller: 'ProfileCtrl'
      })
      .when('/admin/agregarempleado', {
        templateUrl: 'views/agregarEmpleado.html',
        controller: 'UsuarioCtrl'
      })
      .when('/admin/listadoespectadores', {
        templateUrl: 'views/listadousuarios.html',
        controller: 'UsuarioCtrl'
      })
      .when('/admin/listadoempleados', {
        templateUrl: 'views/listadousuarios.html',
        controller: 'UsuarioCtrl'
      })

       .when('/listadoteatros', {
              templateUrl: 'views/listadoteatros.html',
              controller: 'TeatroCtrl'
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

       .when('/categorias/:categoria', {
                       templateUrl:'views/espectaculosSegunCategoria.html',
                       controller:'MainCtrl'

        })

       .when('/teatro/editar/:idteatro', {
                 templateUrl:'views/editarTeatro.html',
                 controller:'TeatroCtrl'
       })

       .when('/funcion', {
               templateUrl:'views/funcion.html',
               controller:'FuncionCtrl'

      })

      .when('/busquedaespectaculosfiltrados/:busqueda', {
                     templateUrl:'views/espectaculosFiltradosSegunNombre.html',
                     controller:'MainCtrl'

      })
       .when('/busquedaespectaculosfiltradosporfecha/:fecha1/:fecha2', {
                           templateUrl:'views/espectaculosFiltradosSegunNombre.html',
                           controller:'MainCtrl'

       })



       .when('/error',{
    	  templateUrl: 'views/error.html',
    	  controller: 'ErrorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('ErrorInterceptor');
  });
