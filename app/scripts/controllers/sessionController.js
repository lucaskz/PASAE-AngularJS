'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp')
  .controller('SessionController', function ($scope,SessionService) {
    $scope.save = function (user){
    	//Control de los input del usuario
    	SessionService.register();
    	
    };
    
    $scope.login = function(){
    	SessionService.login();
    }
   });