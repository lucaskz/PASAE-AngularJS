'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').service('TeatroService', ['$q','$http','$cookies','$httpParamSerializer',function($q,$http,$cookies,$httpParamSerializer) {

    return{
         getTeatros : function(){
              var deferred = $q.defer();

              $http.get('http://localhost:8080/web-module/teatro/listadoteatros').then(function(successData){
                var data = successData;

                deferred.resolve(data);
                },function(error){
                  deferred.reject(error);
                });
              return deferred.promise;
          },

          getDataTeatro : function(idTeatro){
            var deferred = $q.defer();
                     alert(idTeatro);
                         $http.get('http://localhost:8080/web-module/teatro/' + idTeatro).then(function(successData){
                           var data = successData;

                           deferred.resolve(data);
                           },function(error){
                             deferred.reject(error);
                           });
                         return deferred.promise;



          }




    }
   }]);