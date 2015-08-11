'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('ReservaCtrl', function ($scope,EspectaculoService,SectorService,$state,$stateParams) {

	console.log('reserva instanciado');	
	
	$scope.reserva = {asientos : []};
	
	if($stateParams.funcion!=null){
		$scope.reserva.espectaculo = $stateParams.espectaculo;
		$scope.reserva.funcion = $stateParams.funcion;
	}else{
		$state.go('home');
	}
	
	$scope.sectores = SectorService.getSectores($scope.reserva.espectaculo);
	
	$scope.data = {};	
	
	$scope.sectores = SectorService.getSectores('test');
	
	$scope.reserva.monto = 0 ;
	
	if($scope.reserva.sector){
		$scope.asientos = SectorService.getSector(sector);
	}
	
	$scope.getStatus = function(asiento) {
		var index = $scope.reserva.asientos.indexOf(asiento);
        if(index > -1 && asiento.ocupado == 'true') {
            return 'selected';
        } else if(index == -1 && asiento.ocupado == 'true') {
            return 'reserved';
        }else{
        	return 'available';
        }
    }

	
	

    $scope.seatClicked = function(asiento,fila) {    	
    	var index = $scope.reserva.asientos.indexOf(asiento);
    	if(asiento.ocupado == 'true' &&  index!= -1 ){
    		$scope.reserva.asientos.splice(index, 1);
    		asiento.ocupado = 'false';
    		$scope.reserva.monto -= $scope.sector.monto;
    	}else{
    		if(asiento.ocupado == 'false'){
    			asiento.ocupado = 'true';
    			$scope.reserva.asientos.push(asiento);
    			$scope.reserva.monto += $scope.data.sector.monto;
    		}
    	}
    }


	  
   
});
