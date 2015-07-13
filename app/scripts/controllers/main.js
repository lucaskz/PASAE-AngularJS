'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp')
  .controller('MainCtrl', function ($scope,$cookies) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'

    ];


     $scope.$on('loginEvent', function(event, data) {
    			if($cookies.authenticated){
    				$scope.username = $cookies.username;
    				$scope.authenticated = true;
    				$scope.roles = $cookies.roles[0].authority;
    			}else{
    				$scope.authenticated = false;
    			}
    		});


  });
