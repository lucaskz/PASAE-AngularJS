'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('RegisterCtrl', function ($scope,$modal,$modalInstance,SessionService) {

	  $scope.loading = false;

    $scope.register = function (user){
    	//Control de los input del usuario


    	$scope.loading = true;
    	SessionService.register(user).then(
    			function(){
    				//aca okParam es lo que se devuelve en deferred.resolve(DATA) desde el service
    				$scope.login(user);
    			},
    			function(error){
    				// el error funciona igual
    				$scope.loading = false;
    				console.log(error);
    			});
    };

    $scope.login = function () {

    	$modalInstance.close();

	    var modalInstance = $modal.open({
	      animation: true,
	      templateUrl: 'views/login.html',
	      controller: 'LoginCtrl',
	    });
    };

});
