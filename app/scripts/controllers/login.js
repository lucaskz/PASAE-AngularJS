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
    $scope.login = function(){
//    	SessionService.login();    	
    	$scope.loading = true;
    	SessionService.authenticate($scope.user).then(
    			function(data){
    				$scope.loading = false;
    				//aca okParam es lo que se devuelve en deferred.resolve(DATA) desde el service
    				$rootScope.authenticated = true;
    				$rootScope.username = data.username;
    				$rootScope.role = data.role;
    				$rootScope.$broadcast('loginEvent', true);
    				
    			},
    			function(error){
    				// el error funciona igual
    				$scope.loading = false;
    				$rootScope.authenticated = false;
    				$rootScope.username = {};
    				$rootScope.role = {};
    				$rootScope.$broadcast('loginEvent', false);
    			});
    };
   });