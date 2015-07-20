'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp')
  .controller('MainCtrl', function ($scope,$cookies,EspectaculoService,$sessionStorage) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'

    ];


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
     )





  });
