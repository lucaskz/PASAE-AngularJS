'use strict';

/**
 * @ngdoc overview
 * @name pasaeAngularJsApp
 * @description
 * # pasaeAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('pasaeAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider,$httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    
    $httpProvider.interceptors.push('SessionInterceptor');
  });