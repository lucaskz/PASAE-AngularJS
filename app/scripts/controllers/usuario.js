'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:UsuarioCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('UsuarioCtrl', function ($scope,$modal,$filter,UsuarioService, ngTableParams) {

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

   $scope.tableParams = new ngTableParams({
           page: 1,            // show first page
           count: 10,          // count per page
           sorting: {
               name: 'asc'     // initial sorting
           }
       }, {
           total: usuarios.length, // length of data
           getData: function($defer, params) {
               // use build-in angular filter
               var orderedData = params.sorting() ?
                       $filter('orderBy')(usuarios, params.orderBy()) :
                       usuarios;

               $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
           }
       });



   UsuarioService.getListadoEmpleados().then(

          function(data){
            $scope.empleados=data.data;
          },
          function(error){
            $loading=false;
            console.log(error);
          }

   );

    $scope.seleccion = function() {
           $scope.seleccion = this.usuario;
           console.log($scope.seleccion);
    };


});
