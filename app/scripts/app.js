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
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngStorage',
    'ui.router'
  ])
  .constant('config', {
    appName: 'My App',
    appVersion: 2.0,
    apiUrl: 'http://localhost:8080/'
  })
  .config(function ($stateProvider, $urlRouterProvider,$httpProvider) {
	
	  $stateProvider
		 // route to show our basic form (/form)
	    .state('sector-crear', {
	        url: '/sector/crear',
	        templateUrl: 'views/crearTeatro.html',
	        controller: 'SectorCtrl'
	    })
	    
	    // nested states 
	    // each of these sections will have their own view
	    // url will be nested (/form/profile)
	    .state('sector-crear.sectores', {
	        url: '/sectores',
	        templateUrl: 'views/crearTeatroSectores.html'
	    })
	    
	    // url will be /form/interests
	    .state('sector-crear.filas', {
	        url: '/filas',
	        templateUrl: 'views/crearTeatroFilas.html'
	    })
	    
	    // url will be /form/payment
	    .state('sector-crear.confirmar', {
	        url: '/confirmar',
	        templateUrl: 'views/crearTeatroConfirmar.html'
	    })
	    .state('home',{
	    	url: '/',
	    	templateUrl: 'views/main.html',
	        controller: 'MainCtrl'
	    })
		.state('profile',{
	    	url: '/profile',
	    	templateUrl: 'views/profile.html',
	    	controller: 'ProfileCtrl'
	    })
	    .state('addUser',{
	    	url: '/usuario/agregar', 
            templateUrl: 'views/agregarUsuario.html',
            controller: 'UsuarioCtrl'
	    })
	    .state('listUsers',{
	    	url: '/listadousuarios', 
            templateUrl: 'views/listadousuarios.html',
            controller: 'UsuarioCtrl'
	    })
	    .state('show',{
	    	url: '/espectaculo',
            templateUrl: 'views/espectaculo.html',
            controller: 'EspectaculoCtrl'
	    })
	    .state('addShow',{
	    	url: '/espectaculo/agregar', 
            templateUrl:'views/agregarEspectaculo.html',
            controller: 'EspectaculoCtrl'
	    })
	    .state('deleteShow',{
	    	url: '/espectaculo/editar/:idespectaculo', 
            templateUrl:'views/editarEspectaculo.html',
            controller:'EspectaculoCtrl'
	    })
	    .state('showinf',{
	    	url: '/espectaculo/info/:idespectaculo', 
           templateUrl:'views/funcion.html',
           controller:'EspectaculoCtrl'
	    })
	    .state('category',{
	    	url: '/categorias/:categoria', 
            templateUrl:'views/espectaculosSegunCategoria.html',
            controller:'MainCtrl'
	    })
	    .state('concert',{
	    	url: '/funcion', 
	    	templateUrl:'views/funcion.html',
	    	controller:'FuncionCtrl'
	    })
	    .state('error',{
	    	url: '/error',
	      	templateUrl: 'views/error.html',
	    	controller: 'ErrorCtrl'
	    });
//	    .state('reserva', {
//	        url: '/reserva',
//	        templateUrl: 'views/reservarFuncion.html',
//	        controller: 'ReservaCtrl'
//	    })
//	    .state('reserva.sector', {
//	        url: '/sector',
//	        templateUrl: 'views/reservarSector.html'
//	    })
//	    .state('reserva.seleccion', {
//	        url: '/seleccion',
//	        templateUrl: 'views/reservarSeleccion.html'
//	    })
//	    .state('reserva.metodo', {
//	        url: '/metodo',
//	        templateUrl: 'views/reservarMetodo.html'
//	    });
		// catch all route
	    // send users to the form page 
	  
	  $stateProvider
		 // route to show our basic form (/form)
	  	.state('reserva', {
	        url: '/reserva',
	        templateUrl: 'views/reservarFuncion.html',
	        controller: 'ReservaCtrl'
	    })
	    
	    // nested states 
	    // each of these sections will have their own view
	    // url will be nested (/form/profile)
	    .state('reserva.sector', {
	        url: '/sector',
	        templateUrl: 'views/reservarSector.html'
	    })
	    
	    // url will be /form/interests
	     .state('reserva.seleccion', {
	        url: '/seleccion',
	        templateUrl: 'views/reservarSeleccion.html'
	    })
	    // url will be /form/payment
	    .state('reserva.metodo', {
	        url: '/metodo',
	        templateUrl: 'views/reservarMetodo.html'
	    });
	 
	  $urlRouterProvider.otherwise('/');


//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl'
//      })
//      .when('/profile',{
//    	  templateUrl: 'views/profile.html',
//    	  controller: 'ProfileCtrl'
//      })
//      .when('/usuario/agregar', {
//        templateUrl: 'views/agregarUsuario.html',
//        controller: 'UsuarioCtrl'
//      })
//      .when('/listadousuarios', {
//        templateUrl: 'views/listadousuarios.html',
//        controller: 'UsuarioCtrl'
//      })
//      .when('/espectaculo',{
//        templateUrl: 'views/espectaculo.html',
//        controller: 'EspectaculoCtrl'
//      })
//      .when('/espectaculo/agregar', {
//         templateUrl:'views/agregarEspectaculo.html',
//         controller: 'EspectaculoCtrl'
//      })
//      .when('/espectaculo/editar/:idespectaculo', {
//         templateUrl:'views/editarEspectaculo.html',
//         controller:'EspectaculoCtrl'
//
//      })
//      .when('/espectaculo/eliminar/:idespectaculo', {
//                             templateUrl:'views/main.html',
//                             controller:'EspectaculoCtrl'
//       })
//      .when('/espectaculo/info/:idespectaculo', {
//               templateUrl:'views/funcion.html',
//               controller:'EspectaculoCtrl'
//
//       })
//
//       .when('/categorias/:categoria', {
//                       templateUrl:'views/espectaculosSegunCategoria.html',
//                       controller:'MainCtrl'
//
//        })
//        .when('/teatro/crear', {
//               templateUrl:'views/crearTeatro.html',
//               controller:'TeatroCtrl'
//
//      })
//       .when('/funcion', {
//               templateUrl:'views/funcion.html',
//               controller:'FuncionCtrl'
//
//      })
//       .when('/error',{
//    	  templateUrl: 'views/error.html',
//    	  controller: 'ErrorCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('ErrorInterceptor');
  });
