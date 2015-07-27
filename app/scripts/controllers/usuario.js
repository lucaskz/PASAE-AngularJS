'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:UsuarioCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('UsuarioCtrl', function ($scope,$modal,$location,UsuarioService) {


    if ($location.url()==="/admin/listadoespectadores"){
        //$scope.sonEmpleados=false;
        //listadoEspectadores();
        $scope.rol="espectador";
    }
    else {
        //$scope.sonEmpleados=true;
        //listadoEmpleados();
         $scope.rol="espectador";
    }

   var listadoEspectadores= function () {

         UsuarioService.getListadoEspectadores().then(

         function(data){
          $scope.usuarios=data.data;
         },
         function(error){
          $loading=false;
          console.log(error);
         });

   };

  var listadoEmpleados= function () {
         UsuarioService.getListadoEmpleados().then(

         function(data){
            $scope.usuarios=data.data;
         },
          function(error){
            $loading=false;
            console.log(error);
          });
   };

    var listadoEspectadoresFiltrado= function () {
        UsuarioService.getListadoEspectadoresFiltrado($scope.searchValue).then(

        function(data){
           $scope.usuarios=data.data;
        },
        function(error){
           $loading=false;
           console.log(error);
        });
    };

    $scope.search=function(){
           if (!$scope.searchValue) {
             if (!$scope.sonEmpleados)
              listadoEspectadores();
             else
              listadoEmpleados();

           }
           else {
              listadoEspectadoresFiltrado();
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





});
