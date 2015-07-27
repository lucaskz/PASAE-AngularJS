'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:UsuarioCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('UsuarioCtrl', function ($scope,$modal,$location,UsuarioService) {

   var listadoUsuarios= function () {
        if($scope.rol==='espectador') {
          UsuarioService.getListadoEspectadores().then(

          function(data){
            $scope.usuarios=data.data;
          },
          function(error){
            $loading=false;
            console.log(error);
          });
        }
        else {
          UsuarioService.getListadoEmpleados().then(

           function(data){
            $scope.usuarios=data.data;
           },
           function(error){
            loading=false;
            console.log(error);
          });
        };

   };


   var listadoUsuariosFiltrado= function () {
          if($scope.rol==='espectador') {
            UsuarioService.getListadoEspectadoresFiltrado($scope.searchValue).then(

            function(data){
              $scope.usuarios=data.data;
            },
            function(error){
              $loading=false;
              console.log(error);
            });
          }
          else {
            UsuarioService.getListadoEmpleadosFiltrado($scope.searchValue).then(

             function(data){
              $scope.usuarios=data.data;
             },
             function(error){
              loading=false;
              console.log(error);
            });
          };

     };

    $scope.search=function(){
           if (!$scope.searchValue) {
              listadoUsuarios();

           }
           else {
              listadoUsuariosFiltrado();
           }
    };

    $scope.sort = function(keyname){
           $scope.sortKey = keyname;   //set the sortKey to the param passed
           $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };

    $scope.agregarEmpleado = function () {
         	 $scope.loading = true;
           UsuarioService.agregarEmpleado ($scope.usuario).then(

           function(){
               console.log("agrego empleado");

            },

         	function(error){

        		 $scope.loading = false;
             console.log(error);
           });
    };


    if ($location.url()==="/admin/listadoespectadores")
          $scope.rol="espectador";
    else
          $scope.rol="empleado";

    listadoUsuarios();




});
