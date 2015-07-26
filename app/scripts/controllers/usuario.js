'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:UsuarioCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('UsuarioCtrl', function ($scope,$modal,UsuarioService) {

	//scope.user = UsuarioService.getUserData();

	 $scope.agregar = function () {
      	$scope.loading = true;
        UsuarioService.crearUsuario ($scope.usuario).then(

        function(){
            console.log("agrego usuario");

         },

      	function(error){

     			$scope.loading = false;
          console.log(error);


        });

   };

   //$scope.orderByField = 'nombre';
  // $scope.reverseSort = false;

   UsuarioService.getListadoEspectadores().then(
         function(data){
          $scope.usuarios=data.data;
         },
         function(error){
          $loading=false;
          console.log(error);
         }
   );

   /* $scope.config = {
       itemsPerPage: 5,
       maxPages: 5,
       fillLastPage: "yes"
     };*/



   UsuarioService.getListadoEmpleados().then(

          function(data){
            $scope.empleados=data.data;
          },
          function(error){
            $loading=false;
            console.log(error);
          }

   );

});
