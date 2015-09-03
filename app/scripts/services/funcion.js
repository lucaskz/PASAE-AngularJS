'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').service('FuncionService', ['$q','$http','$cookies','$httpParamSerializer','config',function($q,$http,$cookies,$httpParamSerializer,config) {

 return {
        crearFuncion : function(funcion){
              var deferred = $q.defer();

              $http.post(config.apiUrl+'web-module/funcion',funcion).then(function(successData){


                var data = successData;

                deferred.resolve(data);

                },function(error){
                     deferred.reject(error);
                });
              return deferred.promise;
        },
        getDataFunction : function(){
               var deferred = $q.defer();
               $http.get(config.apiUrl+'web-module/function').then(function(successData){
                                var data = successData;
                                deferred.resolve(data);
                                },function(error){
                                  deferred.reject(error);
                                });
               return deferred.promise;


        },
        eliminarFuncion: function(idFuncion){
               var deferred = $q.defer();
               $http.post(config.apiUrl+'web-module/funcion/eliminar/' + idFuncion).then(function(successData){
                                  var data = successData;
                                   deferred.resolve(data);

                                },function(error){
                                     deferred.reject(error);


                                }
               );
               return deferred.promise;
        }




  }
}]);
