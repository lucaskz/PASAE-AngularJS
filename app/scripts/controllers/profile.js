'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('ProfileCtrl', function ($scope,$modal,UsuarioService) {
	  
	$scope.loading = false;
	
    $scope.user = UsuarioService.getUserData();
    	
    	
    	
    	
    	
    
//    $scope.login = function () {
//    	
//    	$modalInstance.close();
//    	
//	    var modalInstance = $modal.open({
//	      animation: true,
//	      templateUrl: 'views/login.html',
//	      controller: 'LoginCtrl',
//	    });
// };	   
    	
   });