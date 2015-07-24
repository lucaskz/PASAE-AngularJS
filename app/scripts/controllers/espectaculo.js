'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('EspectaculoCtrl', function ($scope,$routeParams,$location,$filter,$modal,EspectaculoService,CategoriaService,TeatroService,FuncionService) {

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
                   $location.path('/');

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


    $scope.agregar_funcion = function(){

          $scope.fecha= $filter('date')($scope.fecha, "yyyy-MM-dd");



             FuncionService.crearFuncion($scope.fecha, $scope.espectaculo.id).then(


                      function(data){
                           console.log("creo funcion");

                      },
                       function(error){

                              $scope.loading = false;
                              console.log(error);


                      }
             );
     }

   $scope.isCollapsed = true;



   $scope.eliminarFuncion = function(funcion){

               $scope.funcionSelected = funcion;
                $scope.modalInstance = $modal.open({
                 animation: true,
                 scope:$scope,
                 templateUrl: 'views/eliminarFuncion.html'
               });
    }

    $scope.confirmDelete2 = function(){
           FuncionService.eliminarFuncion($scope.funcionSelected).then(
                               function(data){
                                  EspectaculoService.getFuncionesEspectaculo($scope.espectaculo.id).then(
                                            function(data){
                                              $scope.funciones=data.data;

                                            },

                                            function(error){

                                              $loading=false;
                                              console.log(error);
                                            }
                                       );
                                   $scope.modalInstance.close();
                               },
                               function(error){

                                  console.log(error);
                                   $scope.modalInstance.close();
                               });



        }


});

