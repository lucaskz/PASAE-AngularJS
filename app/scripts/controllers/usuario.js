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

   UsuarioService.getListadoEspectadores().then(
         function(data){
          $scope.usuarios=data.data;
          $scope.apellido=data.data.apellido;
          $scope.nombre=data.data.nombre;
          $scope.email=data.data.email;
         },
         function(error){
          $loading=false;
          console.log(error);
         }
   );


  $scope.displayedUsuarios=[].concat($scope.usuarios);

   UsuarioService.getListadoEmpleados().then(

          function(data){
            $scope.usuarios=data.data;
          },
          function(error){
            $loading=false;
            console.log(error);
          }

   );

});
