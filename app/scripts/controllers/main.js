'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp')
  .controller('MainCtrl', function ($scope,$cookies,EspectaculoService,$sessionStorage,$modal) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'

    ];
    console.log("mainctrl instanciado");


     $scope.$on('loginEvent', function(event, data) {
    			if($sessionStorage.authenticated){
    				$scope.username = $sessionStorage.username;
    				$scope.authenticated = true;
    				$scope.roles = $sessionStorage.roles[0].authority;
    			}else{
    				$scope.authenticated = false;
    			}
    		});


     EspectaculoService.getEspectaculos().then(
          function(data){
            $scope.espectaculos=data.data;

          },

          function(error){

            $loading=false;
            console.log(error);
          }
     );

     $scope.eliminar = function(espectaculo){

            $scope.espectaculoSelected = espectaculo;
             $scope.modalInstance = $modal.open({
              animation: true,
              scope:$scope,
              templateUrl: 'views/eliminarEspectaculo.html'
            });
     }

     $scope.confirmDelete = function(){
        EspectaculoService.eliminarEspectaculo($scope.espectaculoSelected).then(
                            function(data){
                               EspectaculoService.getEspectaculos().then(
                                         function(data){
                                           $scope.espectaculos=data.data;

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
