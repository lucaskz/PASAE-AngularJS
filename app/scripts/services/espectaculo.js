'use strict';

angular.module('pasaeAngularJsApp').service('EspectaculoService', ['$q','$http','$cookies','$httpParamSerializer','config',function($q,$http,$cookies,$httpParamSerializer,config){
    return {
        crearEspectaculo : function(espectaculo){
              var deferred = $q.defer();
             var json={"nombre":espectaculo.nombre,"descripcion":espectaculo.descripcion,"categoriaId":espectaculo.categoriaId,"teatroId":espectaculo.teatroId }
             var formData = new FormData();
                  formData.append("imagen", archivo);
                  formData.append("datos",JSON.stringify(json));//important: convert to string JSON!
                       var req = {
                         url: config.apiUrl+'web-module/espectaculo',
                         method: 'POST',
                         transformRequest: angular.identity,
                         headers: {'Content-Type': undefined},
                         data: formData

                       }


              $http(req).then(function(successData){


                var data = successData;

                deferred.resolve(data);
                },function(error){
                  deferred.reject(error);
                });
              return deferred.promise;
        },

        getEspectaculos : function(){

            var deferred = $q.defer();

                   $http.get(config.apiUrl+'web-module/espectaculo/listadoespectaculos').then(function(successData){
                      		var data = successData;

                      		deferred.resolve(data);
                      		},function(error){
                      					deferred.reject(error);

                      		});
                      		return deferred.promise;

         },
         getDataEspectaculo : function(idEspectaculo){

            var deferred = $q.defer();
                            $http.get(config.apiUrl+'web-module/espectaculo/' + idEspectaculo).then(function(successData){
                                  		var data = successData;

                                  		deferred.resolve(data);
                                  		},function(error){
                                  					deferred.reject(error);

                                  		});
                                  		return deferred.promise;

         },
         editarEspectaculo : function(idEspectaculo,espectaculo){

                               var deferred = $q.defer();
                               $http.post(config.apiUrl+'web-module/espectaculo/' + idEspectaculo + '/modificardatos', espectaculo).then(function(successData){
                                          var data = successData;
                                          deferred.resolve(data);

                                     },function(error){
                                          deferred.reject(error);

                             });
                             return deferred.promise;

         },
         eliminarEspectaculo: function(idEspectaculo){

                            var deferred = $q.defer();
                            $http.post(config.apiUrl+'web-module/espectaculo/eliminar/' + idEspectaculo).then(function(successData){
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
                       $http.get(config.apiUrl+'web-module/espectaculo/' + idEspectaculo + '/listado_funciones').then(function(successData){
                                var data = successData;

                                deferred.resolve(data);
                       },function(error){
                             deferred.reject(error);

                       });
                       return deferred.promise;

         },

         listadoEspectaculoSegunCategoria : function(categoria){

                      var deferred = $q.defer();
                      $http.get(config.apiUrl+'web-module/espectaculo/listadoespectaculosporcategoria/' + categoria).then(function(successData){
                            var data = successData;

                            deferred.resolve(data);
                       },function(error){
                            deferred.reject(error);

                       });
                       return deferred.promise;
          },
          listadoEspectaculosFiltrado : function(nombreEspectaculo){
               var deferred = $q.defer();
                                    $http.get(config.apiUrl+'web-module/espectaculo/filtrarespectaculospornombre/' + nombreEspectaculo).then(function(successData){
                                          var data = successData;

                                          deferred.resolve(data);
                                     },function(error){
                                          deferred.reject(error);

                                     });
                                     return deferred.promise;
          },


         listadoEspectaculosFiltradoPorFechas: function(fechaInferior,fechaSuperior){
               var deferred = $q.defer();
                                     $http.get(config.apiUrl+'web-module/espectaculo/listadoespectaculosentrefechas/'+ fechaInferior + '/' + fechaSuperior).then(function(successData){
                                          var data = successData;
                                          deferred.resolve(data);
                                      },function(error){
                                          deferred.reject(error);

                                      });
                                       return deferred.promise;


         }





       }

}]);


