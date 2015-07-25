'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('TeatroCtrl', function ($scope,TeatroService) {

//   $scope.teatros=TeatroService.getTeatros();

    TeatroService.getTeatros().then(
     function(data){

        $scope.teatros=data.data;

     },
     function (error){
        $scope.loading=false;
        $scope.log(error);
      }
  );









});
