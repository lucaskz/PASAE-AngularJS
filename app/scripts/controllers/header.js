'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp')
  .controller('HeaderCtrl', function ($scope, $modal, $log) {	
	  
	  $scope.login = function () {
		  var modalInstance = $modal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: 'views/login.html',
		      controller: 'LoginCtrl',
		      size: 4,
		      resolve: {
		        items: function () {
		          return $scope.items;
		        }
		      }
		  });
	};
	  
	  $scope.register = function () {

		    var modalInstance = $modal.open({
		      animation: true,
		      templateUrl: 'views/register.html',
		      controller: 'RegisterCtrl',
		    });
	 };	  
  });