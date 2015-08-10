'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').service('TeatroService', ['$q','$http','$cookies','$httpParamSerializer','config',function($q,$http,$cookies,$httpParamSerializer,config) {

    return{
         getTeatros : function(){
              var deferred = $q.defer();

              $http.get(config.apiUrl+'web-module/teatro/listadoTeatros').then(function(successData){
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
                         $http.get(config.apiUrl+'web-module/teatro/' + idTeatro).then(function(successData){
                           var data = successData;

                           deferred.resolve(data);
                           },function(error){
                             deferred.reject(error);
                           });
                         return deferred.promise;



          }

         


    }
   }]);
