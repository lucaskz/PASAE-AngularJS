'use strict';

angular.module('pasaeAngularJsApp').service('EspectaculoService', ['$q','$http','$cookies','$httpParamSerializer',function($q,$http,$cookies,$httpParamSerializer){
    return {
        crearEspectaculo : function(archivo,espectaculo){
              var deferred = $q.defer();
             var json={"nombre":espectaculo.nombre,"descripcion":espectaculo.descripcion,"categoriaId":espectaculo.categoriaId,"teatroId":espectaculo.teatroId }
             var formData = new FormData();
                  formData.append("imagen", archivo);
                  formData.append("datos",JSON.stringify(json));//important: convert to string JSON!
                       var req = {
                         url: 'http://localhost:8080/web-module/espectaculo',
                         method: 'POST',
                         transformRequest: angular.identity,
                         headers: {'Content-Type': undefined},
                         data: formData

                       }


               $http.post(req.url,req.data).then(function(successData){


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
          },


         listadoEspectaculosFiltradoPorFechas: function(fechaInferior,fechaSuperior){
               var deferred = $q.defer();
                                     $http.get('http://localhost:8080/web-module/espectaculo/listadoespectaculosentrefechas/'+ fechaInferior + '/' + fechaSuperior).then(function(successData){
                                          var data = successData;
                                          deferred.resolve(data);
                                      },function(error){
                                          deferred.reject(error);

                                      });
                                       return deferred.promise;


         }





       }

}]);


