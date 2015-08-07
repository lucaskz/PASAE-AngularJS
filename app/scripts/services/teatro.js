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
        crearTeatro : function(teatro){
                      var deferred = $q.defer();

                      $http.post('http://localhost:8080/web-module/teatro',teatro).then(function(successData){


                        var data = successData;

                        deferred.resolve(data);
                        },function(error){
                          deferred.reject(error);
                        });
                      return deferred.promise;
         },
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
                         $http.get('http://localhost:8080/web-module/teatro/' + idTeatro).then(function(successData){
                           var data = successData;

                           deferred.resolve(data);
                           },function(error){
                             deferred.reject(error);
                           });
                         return deferred.promise;



          },

          editarTeatro : function(idTeatro,teatro){

                                         var deferred = $q.defer();
                                         $http.post('http://localhost:8080/web-module/teatro/' + idTeatro + '/modificardatos', teatro).then(function(successData){
                                                    var data = successData;
                                                    deferred.resolve(data);

                                               },function(error){
                                                    deferred.reject(error);

                                       });
                                       return deferred.promise;

           },
           eliminarTeatro: function(idTeatro){

                                       var deferred = $q.defer();
                                       $http.post('http://localhost:8080/web-module/teatro/eliminar/' + idTeatro).then(function(successData){
                                                 var data = successData;
                                                  deferred.resolve(data);
                                               },function(error){
                                                    deferred.reject(error);


                                               }
                                        );
                                        return deferred.promise;



            },
            tieneEspectaculosAsociados: function(nombreTeatro){

                        var deferred = $q.defer();
                        $http.get('http://localhost:8080/web-module/espectaculo/espectaculosdeteatro/' + nombreTeatro).then(function(successData){
                                          var data = successData;

                                          deferred.resolve(data);
                                          },function(error){
                                            deferred.reject(error);
                                          });
                                        return deferred.promise;

            }


    }
   }]);
