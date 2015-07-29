'use strict';

angular.module('pasaeAngularJsApp').service('EspectaculoService', ['$q','$http','$cookies','$httpParamSerializer',function($q,$http,$cookies,$httpParamSerializer){
    return {
        crearEspectaculo : function(espectaculo){
              var deferred = $q.defer();

              $http.post('http://localhost:8080/web-module/espectaculo',espectaculo).then(function(successData){


                var data = successData;

                deferred.resolve(data);
                },function(error){
                  deferred.reject(error);
                });
              return deferred.promise;
        },

        getEspectaculos : function(){

            var deferred = $q.defer();

                   $http.get('http://localhost:8080/web-module/espectaculo/listadoespectaculos').then(function(successData){
                      		var data = successData;

                      		deferred.resolve(data);
                      		},function(error){
                      					deferred.reject(error);

                      		});
                      		return deferred.promise;

         },
         getDataEspectaculo : function(idEspectaculo){

            var deferred = $q.defer();
                            $http.get('http://localhost:8080/web-module/espectaculo/' + idEspectaculo).then(function(successData){
                                  		var data = successData;

                                  		deferred.resolve(data);
                                  		},function(error){
                                  					deferred.reject(error);

                                  		});
                                  		return deferred.promise;

         },
         editarEspectaculo : function(idEspectaculo,espectaculo){

                               var deferred = $q.defer();
                               $http.post('http://localhost:8080/web-module/espectaculo/' + idEspectaculo + '/modificardatos', espectaculo).then(function(successData){
                                          var data = successData;
                                          deferred.resolve(data);

                                     },function(error){
                                          deferred.reject(error);

                             });
                             return deferred.promise;

         },
         eliminarEspectaculo: function(idEspectaculo){

                            var deferred = $q.defer();
                            $http.post('http://localhost:8080/web-module/espectaculo/eliminar/' + idEspectaculo).then(function(successData){
                                      var data = successData;
                                       deferred.resolve(data);
                                    },function(error){
                                         deferred.reject(error);


                                    }
                             );
                             return deferred.promise;



         },
         getFuncionesEspectaculo : function(idEspectaculo){

                       var deferred = $q.defer();
                       $http.get('http://localhost:8080/web-module/espectaculo/' + idEspectaculo + '/listadofunciones').then(function(successData){
                                var data = successData;

                                deferred.resolve(data);
                       },function(error){
                             deferred.reject(error);

                       });
                       return deferred.promise;

         },

         listadoEspectaculoSegunCategoria : function(categoria){

                      var deferred = $q.defer();
                      $http.get('http://localhost:8080/web-module/espectaculo/listadoespectaculosporcategoria/' + categoria).then(function(successData){
                            var data = successData;

                            deferred.resolve(data);
                       },function(error){
                            deferred.reject(error);

                       });
                       return deferred.promise;
          },
          listadoEspectaculosFiltrado : function(nombreEspectaculo){
               var deferred = $q.defer();
                                    $http.get('http://localhost:8080/web-module/espectaculo/filtrarespectaculospornombre/' + nombreEspectaculo).then(function(successData){
                                          var data = successData;

                                          deferred.resolve(data);
                                     },function(error){
                                          deferred.reject(error);

                                     });
                                     return deferred.promise;
          }







       }

}]);


