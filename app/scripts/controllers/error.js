'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('ErrorCtrl', function ($scope, $location) {
	
	

	 $scope.$on('errorStatus', function(event, data) {
		 						console.log(data); 
		 						$location.path('/error');
		 					});
});