'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('EspectaculoCtrl', function ($scope,$routeParams,$location,EspectaculoService,CategoriaService,TeatroService) {






  TeatroService.getTeatros().then(
     function(data){

        $scope.teatros=data.data;
     },
     function (error){
        $scope.loading=false;
        $scope.log(error);
      }
  );

  CategoriaService.getCategorias().then(
       			function(data){
       				//aca okParam es lo que se devuelve en deferred.resolve(DATA) desde el service
       				// los datos estan en data.data
       				$scope.categorias=data.data;

       			},
       			function(error){
       				// el error funciona igual
       				$scope.loading = false;
       				console.log(error);
       			}
  );

   $scope.agregar = function () {
    	$scope.loading = true;

          EspectaculoService.crearEspectaculo($scope.espectaculo).then(
          		   function(){
                   console.log("agrego espectaculo");


          		  },
          			function(error){

          				$scope.loading = false;
          				console.log(error);


               }
          );

    };

 $scope.listado= function(){
      EspectaculoService.getEspectaculos().then(
       function(){

       },

       function(error){

        $loading=false;
         console.log(error);
       });



 };


 EspectaculoService.getDataEspectaculo($routeParams.idespectaculo).then(
   	function(data){
         				// los datos estan en data.data
          				$scope.espectaculo=data.data;

     },
      function(error){
          				 //el error funciona igual
          				$scope.loading = false;
          				console.log(error);
    });



$scope.editar=function(){
$scope.loading = true;

          EspectaculoService.editarEspectaculo($routeParams.idespectaculo,$scope.espectaculo).then(
          		   function(){
                   console.log("edito espectaculo");


          		  },
          			function(error){

          				$scope.loading = false;
          				console.log(error);


               }
          );



}

$scope.eliminar=function(){
 $scope.loading = true;

     EspectaculoService.eliminarEspectaculo($routeParams.idespectaculo).then(
              		   function(){
                       console.log("elimino con espectaculo");
                       alert("entro a eliminar");
                       $location.url("/");

              		  },
              			function(error){

              				$scope.loading = false;
              				console.log(error);


                   }
      )
}

EspectaculoService.getFuncionesEspectaculo($routeParams.idespectaculo).then(
   	function(data){
         				// los datos estan en data.data
          				$scope.datos=data.data;

     },
      function(error){
          				 //el error funciona igual
          				$scope.loading = false;
          				console.log(error);
    });






});

