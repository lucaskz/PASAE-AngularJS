'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('SectorCtrl', function ($scope,SectorService,EspectaculoService,$state) {

	$scope.teatro = {};
	
	$scope.especatulos = EspectaculoService.getEspectaculos();
	
	$scope.teatro  = {};
	
	
	
	$scope.crearSectores = function(){
		$scope.teatro.sectores = [];
		for (var i = 0; i < $scope.teatro.nSectores; i++)
			$scope.teatro.sectores.push({});	
	};
	
	$scope.crearFilas = function(sector){
		sector.filas = [];
		for (var i = 0; i < sector.nFilas; i++)
			sector.filas.push({"numero": i+1});
	};
	
	$scope.crearAsientos = function(fila){
		fila.asientos = [];
		for (var i = 0; i < fila.nAsientos; i++)
			fila.asientos.push({"numero": i+1});
	}
	
	$scope.processForm= function(){
		TeatroService.crearTeatro($scope.teatro);
	};
	
	if($state.current.name == 'teatro-crear'){
		$state.go('sector-crear.sectores'); 
	}
	
	
	
	
	
	
	console.log('Sector ctrl instanciado');
   
});
