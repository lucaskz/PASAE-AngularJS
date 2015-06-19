'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('LoginCtrl', function ($scope,$modal,$modalInstance,SessionService) {
	  
	$scope.loading = false;
	
    $scope.register = function (user){
    	$modalInstance.close();   	

	    var modalInstance = $modal.open({
	      animation: true,
	      templateUrl: 'views/register.html',
	      controller: 'RegisterCtrl',
	    });
	 	  
    };    
    $scope.login = function(user){
//    	SessionService.login();    	
    	$scope.loading = true;
    	SessionService.authenticate(user).then(
    			function(){
    				//aca okParam es lo que se devuelve en deferred.resolve(DATA) desde el service
    				$scope.loading = false;
    			},
    			function(error){
    				// el error funciona igual
    				$scope.loading = false;
    				console.log(error);
    			});
    };
   });