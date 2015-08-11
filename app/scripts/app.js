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
    'angularUtils.directives.dirPagination',
    'file-model',
    'ui.router'
    ])
  .constant('config', {
	    appName: 'My App',
	    appVersion: 2.0,
	    apiUrl: 'http://localhost:8080/'
   })
  .config(function ($stateProvider, $urlRouterProvider,$httpProvider) {

    $stateProvider
      .state('home',{
 	     	url:'/',
  	        templateUrl: 'views/main.html',
  		    controller: 'MainCtrl'
      })
      .state('about', {
    	  	url:'/about',
   	        templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
      })
      .state('editData',{
      	  url:'/perfil/editardatos',
    	  templateUrl: 'views/editarPerfil.html',
    	  controller: 'ProfileCtrl'
      })
      .state('addEmployee', {
	      	url:'/admin/agregarempleado',
  	        templateUrl: 'views/agregarEmpleado.html',
   		    controller: 'UsuarioCtrl'
      })
      .state('listEspectator', {
      		url:'/admin/listadoespectadores',
        	templateUrl: 'views/listadousuarios.html',
      	    controller: 'UsuarioCtrl'
      })
      .state('listEmployee', {
    	      url:'/admin/listadoempleados',
       		 templateUrl: 'views/listadousuarios.html',
       		 controller: 'UsuarioCtrl'
      })
       .state('listTeather', {
      		url:'/listadoteatros',
            templateUrl: 'views/listadoteatros.html',
            controller: 'TeatroCtrl'
       })
       .state('show',{
     	 	url:'/espectaculo',
        	templateUrl: 'views/espectaculo.html',
        	controller: 'EspectaculoCtrl'
      })
      .state('addShow', {
	     url:'/espectaculo/agregar',
         templateUrl:'views/agregarEspectaculo.html',
         controller: 'EspectaculoCtrl'
      })
      .state('editShow', {
      		url:'/espectaculo/editar/:idespectaculo',
        	templateUrl:'views/editarEspectaculo.html',
        	controller:'EspectaculoCtrl'
      })
      .state('showDelete', {
	      	url:'/espectaculo/eliminar/:idespectaculo',
            templateUrl:'views/main.html',
            controller:'EspectaculoCtrl'
       })
      .state('showInfo', {
	      	url:'/espectaculo/info/:idespectaculo',
            templateUrl:'views/funcion.html',
            controller:'EspectaculoCtrl'
       })
       .state('category', {
      		url:'/categorias/:categoria',
            templateUrl:'views/espectaculosSegunCategoria.html',
            controller:'MainCtrl'
        })
       .state('editTeather', {
		      	url:'/teatro/editar/:idteatro',
                templateUrl:'views/editarTeatro.html',
                controller:'TeatroCtrl'
       })
       .state('performance', {
	      	url:'/funcion',
            templateUrl:'views/funcion.html',
            controller:'FuncionCtrl'
      })
      .state('searchEspectaculoByFilter', {
		   	url:'/busquedaespectaculosfiltrados/:busqueda',
            templateUrl:'views/espectaculosFiltradosSegunNombre.html',
            controller:'MainCtrl'
      })
       .state('searchEspectaculoByDate', {
	      	url:'/busquedaespectaculosfiltradosporfecha/:fecha1/:fecha2',
            templateUrl:'views/espectaculosFiltradosSegunNombre.html',
            controller:'MainCtrl'
       })
       .state('error',{
	      	url:'/error',
            templateUrl: 'views/error.html',
            controller: 'ErrorCtrl'
      })
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

    $urlRouterProvider.otherwise("/");

    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('ErrorInterceptor');
  });
