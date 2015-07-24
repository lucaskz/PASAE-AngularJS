'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp')
  .controller('MainCtrl', function ($scope,$cookies,$routeParams,EspectaculoService,$sessionStorage,$modal) {

   $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'

    ];
    console.log("mainctrl instanciado");


   	  var checkLogin = function(){
   		  if($sessionStorage.authenticated){
   				$scope.username = $sessionStorage.username;
   				$scope.authenticated = true;
   				$scope.roles = $sessionStorage.roles[0].authority;
   			}else{
   				$scope.authenticated = false;
   			}
   	  }

   	  checkLogin();

     $scope.$on('loginEvent', function(event, data) {
       checkLogin();
      });


     EspectaculoService.getEspectaculos().then(
          function(data){
            $scope.espectaculos=data.data;

          },

          function(error){

            $scope.loading=false;
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

     $scope.confirmDelete = function(espectaculo){
        EspectaculoService.eliminarEspectaculo($scope.espectaculoSelected.id).then(
                            function(data){
//                               EspectaculoService.getEspectaculos().then(
//                                         function(data){
//                                           $scope.espectaculos=data.data;
//
//                                         },
//
//                                         function(error){
//
//                                           $loading=false;
//                                           console.log(error);
//                                         }
//                                    );
                                console.log(data);
                                var index = -1,i=0;
                                while(index==-1 && i<=$scope.espectaculos.length-1){
                                	if($scope.espectaculos[i].id==espectaculo.id){
                                		index=i;
                                	}
                                	i++;
                                }
                                $scope.espectaculos.splice(index, 1 );                                
                                $scope.modalInstance.close();
                            },
                            function(error){

                               console.log(error);
                                $scope.modalInstance.close();
                            });



     }

//     EspectaculoService.listadoEspectaculoSegunCategoria($routeParams.categoria).then(
//
//                  function(data){
//                      $scope.espectaculos2=data.data;
//
//                  },
//
//                  function(error){
//                              console.log(error);
//                  }
//      );




  });
