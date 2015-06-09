'use strict';

/**
 * @ngdoc overview
 * @name pasaeAngularjsApp
 * @description
 * # pasaeAngularjsApp
 *
 * Main module of the application.
 */
angular
  .module('pasaeAngularjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
