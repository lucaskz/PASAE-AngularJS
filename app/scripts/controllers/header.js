'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp')
  .controller('HeaderCtrl', function ($scope, $modal, $log,$rootScope) {	
	  
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
	 
	 $scope.$on('loginEvent', function(event, data) {
			if($rootScope.authenticated){
				$scope.username = $rootScope.username;
				$scope.authenticated = true;				
			}else{
				$scope.authenticated = false;
			}
		});
  });