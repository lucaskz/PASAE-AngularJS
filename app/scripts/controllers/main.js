'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
