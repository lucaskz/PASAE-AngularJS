'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').service('FuncionService', ['$q','$http','$cookies','$httpParamSerializer',function($q,$http) {

 return {
        crearFuncion : function(funcion){
              var deferred = $q.defer();

              $http.post('http://localhost:8080/web-module/funcion',funcion).then(function(successData){


                var data = successData;

                deferred.resolve(data);

                },function(error){
                     deferred.reject(error);
                });
              return deferred.promise;
        },
        eliminarFuncion: function(idFuncion){

                           var deferred = $q.defer();
                           $http.post('http://localhost:8080/web-module/funcion/eliminar/' + idFuncion).then(function(successData){
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
