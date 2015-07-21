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

});
