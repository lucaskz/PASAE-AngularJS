'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description # AboutCtrl Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('HeaderCtrl',
		function($scope, $modal, $log, $rootScope, $cookies, $sessionStorage) {

			var checkLogin = function() {
				if ($sessionStorage.authenticated) {
					$scope.username = $sessionStorage.username;
					$scope.authenticated = true;
					$scope.roles = $sessionStorage.roles[0].authority;
				} else {
					$scope.authenticated = false;
				}
			}

			checkLogin();

			$scope.login = function() {
				var modalInstance = $modal.open({
					animation : false,
					templateUrl : 'views/login.html',
					controller : 'LoginCtrl',
					size : 4,
					resolve : {
						items : function() {
							return $scope.items;
						}
					}
				});
			};

			$scope.register = function() {

				var modalInstance = $modal.open({
					animation : false,
					templateUrl : 'views/register.html',
					controller : 'RegisterCtrl',
					size : 4,
					resolve : {
						items : function() {
							return $scope.items;
						}
					}
				});
			};

			$scope.$on('loginEvent', function(event, data) {
				checkLogin();
			});
		});
