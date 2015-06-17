'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp')
  .controller('SessionController', function ($scope,SessionService) {
	  
	$scope.loading = false;
	
    $scope.save = function (user){
    	//Control de los input del usuario
    	$scope.loading = true;
    	SessionService.register(user).then(
    			function(okParam){
    				//aca okParam es lo que se devuelve en deferred.resolve(DATA) desde el service
    				$scope.login(user);
    			},
    			function(error){
    				// el error funciona igual
    				$scope.loading = false;
    				console.log(error);
    			})    	
    };    
    $scope.login = function(){
//    	SessionService.login();    	
    	$scope.loading = true;
    	SessionService.authenticate(user).then(
    			function(okParam){
    				//aca okParam es lo que se devuelve en deferred.resolve(DATA) desde el service
    				$scope.loading = false;
    			},
    			function(error){
    				// el error funciona igual
    				$scope.loading = false;
    				console.log(error);
    			}) 
    };
   });