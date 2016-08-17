'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description # RegisterController Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('EspectaculoCtrl', function($scope, $stateParams , $location, $filter, $modal,EspectaculoService, CategoriaService, TeatroService,FuncionService,$state,$sessionStorage) {
  $scope.isCollapsed = true;

  var teatros=function(){
	    TeatroService.getTeatros().then(function(data) {
	        $scope.teatros = data.data;
      	},
      	function(error) {
      	  $scope.loading = false;

        });
  }
  $scope.reservarEntrada = function(fn){
         if($sessionStorage.authenticated){
             $scope.autenticado=$sessionStorage.authenticated;
             $scope.roles=$sessionStorage.roles[0].authority;
    			   if($scope.roles == 'ROLE_ESPECTADOR'){
        			   $state.go('reserva.sector', {funcion: fn,espectaculo:{ id : $scope.espectaculo.id , nombre : $scope.espectaculo.nombre} })
             }
         }
          else{
             /*if ($location.url() === "/espectaculo/info/"+ $stateParams.idespectaculo){
                                   $state.go('showInfo',$stateParams.idespectaculo);
                       }*/
             open_modal();

          }
  }




			CategoriaService.getCategorias().then(function(data) {
				// aca okParam es lo que se devuelve en deferred.resolve(DATA)
				// desde el service
				// los datos estan en data.data
				$scope.categorias = data.data;

			}, function(error) {
				// el error funciona igual
				$scope.loading = false;
				console.log(error);
			});

			$scope.agregar = function() {
				$scope.loading = true;
				EspectaculoService.crearEspectaculo($scope.archivo,$scope.espectaculo).then(
						function(data) {


							console.log("agrego espectaculo");
							if(data.data.title == "error"){
                   sweetAlert("Oops...",data.data.detail, "error");

              }
							$location.path('/');

						}, function(error) {

							$scope.loading = false;
							console.log(error);

						});

			};
      $scope.editar = function() {
				$scope.loading = true;
      if($stateParams.idespectaculo != null){
				EspectaculoService.editarEspectaculo(
						$stateParams.idespectaculo, $scope.espectaculo).then(
						function() {
							console.log("edito espectaculo");
							$location.path("/");


						}, function(error) {

							$scope.loading = false;
							console.log(error);

						});
      }
			}

			$scope.eliminar = function() {
				$scope.loading = true;

				EspectaculoService.eliminarEspectaculo(
						$stateParams .idespectaculo).then(function() {
					console.log("elimino con espectaculo");
					alert("entro a eliminar");

				}, function(error) {

					$scope.loading = false;
					console.log(error);

				})
			}


			$scope.agregar_funcion = function() {

				var fecha = $filter('date')($scope.fecha, "yyyy-MM-dd");
				var hora = $filter('date')($scope.hora, "HH:mm");

				FuncionService.crearFuncion({
					"fecha" : fecha,
					"hora" : hora,
					"espectaculoId" : $stateParams .idespectaculo
				}).then(

				function(data) {
					console.log("creo funcion");
					funciones();



				}, function(error) {

					$scope.loading = false;
					console.log(error);

				});
			}




			$scope.eliminarFuncion = function(funcion) {

				$scope.funcionSelected = funcion;
				$scope.modalInstance = $modal.open({
					animation : true,
					scope : $scope,
					templateUrl : 'views/eliminarFuncion.html'
				});
		  }
      var ventasAsociadas=function (id){
           FuncionService.tieneVentasAsociadas(id).then(

               function(data){
                  $scope.cantidad=data.data;
               },
               function (error){
                  $scope.loading=false;
                  $scope.log(error);
                }
            );
      }



			$scope.confirmDelete2 = function(fn) {


  var cantidad=FuncionService.tieneVentasAsociadas(fn.id);

  if (cantidad != 0){
                 sweetAlert("Oops...", "La funcion tiene ventas asociados", "error");
       }
       else{
			   FuncionService.eliminarFuncion($scope.funcionSelected.id)
						.then(
								function(data) {

									console.log(data);
									var index = -1, i = 0;
									while (index == -1
											&& i <= $scope.datos.length - 1) {
										if ($scope.datos[i].id == fn.id) {
											index = i;
										}
										i++;
									}
									$scope.datos.splice(index, 1);
									$scope.modalInstance.close();

								}, function(error) {

									console.log(error);
									$scope.modalInstance.close();
								});

			}
    }

// }

   var funciones=function(){
   		   EspectaculoService.getFuncionesEspectaculo(

   				$stateParams.idespectaculo).then(function(data) {
   				// los datos estan en data.data
   				$scope.datos = data.data;
   			  if ($sessionStorage.authenticated){
               $scope.roles=$sessionStorage.roles[0].authority;
               $scope.autenticado=$sessionStorage.authenticated;
          }

   			}, function(error) {
   				// el error funciona igual
   				$scope.loading = false;
   				console.log(error);
   			});
    }
    if($stateParams.idespectaculo != null){
         			EspectaculoService.getDataEspectaculo($stateParams.idespectaculo)
         					.then(function(data) {
         						// los datos estan en data.data
         						$scope.espectaculo = data.data;


         					}, function(error) {
         						// el error funciona igual
         						$scope.loading = false;
         						console.log(error);
         					});
    }
   if($location.url() === "/espectaculo/agregar"){
           teatros();
   			}
   if($location.url() =="/espectaculo/info/"+ $stateParams.idespectaculo){

   			    	funciones();
   }
   var open_modal=function(){
       $scope.modalInstance = $modal.open({
         					animation : true,
         					scope : $scope,
         					templateUrl : 'views/login.html',
         					controller : 'LoginCtrl'
       }

   );


    };




		});
