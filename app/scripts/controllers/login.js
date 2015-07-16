'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('LoginCtrl', function ($scope,$modal,$modalInstance,SessionService,$rootScope,$cookies) {

	$scope.loading = false;

    $scope.register = function (user){
    	$modalInstance.close();

	    var modalInstance = $modal.open({
	      animation: true,
	      templateUrl: 'views/register.html',
	      controller: 'RegisterCtrl',
	    });

    };
    
    $scope.close = function(){
    	$modalInstance.dismiss('cancel');
    }
    
    
    $scope.login = function(){
//    	SessionService.login();
    	$scope.loading = true;
    	SessionService.authenticate($scope.user).then(
    			function(data){
    				$scope.loading = false;
    				//aca okParam es lo que se devuelve en deferred.resolve(DATA) desde el service
    				$cookies.authenticated = true;
    				$cookies.username = data.username;
    				$cookies.roles = data.roles;
    				$cookies.user = data.user;
    				$rootScope.$broadcast('loginEvent', true);
    				$scope.error = false;
    				$scope.errorMsg = {};
    				$modalInstance.close();
    			},
    			function(error){
    				// el error funciona igual
    				$scope.loading = false;
    				$cookies.authenticated = false;
    				$cookies.username = {};
    				$cookies.role = {};
    				$cookies.user = {};
    				$rootScope.$broadcast('loginEvent', false);
    				$scope.error = true;
    				$scope.errorMsg = error;
    			});
    };
   });
