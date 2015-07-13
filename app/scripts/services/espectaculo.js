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
        editarEspectaculo:function() {

          var deferred = $q.defer();

          			$http.get('http://localhost:8080/web-module/espectaculo/0').then(function(successData){
          				var data = successData;

          				deferred.resolve(data);
          				},function(error){
          					deferred.reject(error);
          				});
          			return deferred.promise;
         },

         getEspectaculos() : function(){

            var deferred = $q.defer();

                   $http.get('http://localhost:8080/web-module/espectaculo/listadoEspectaculos').then(function(successData){
                      		var data = successData;

                      		deferred.resolve(data);
                      		},function(error){
                      					deferred.reject(error);

                      		});
                      		return deferred.promise;

         }



     }







}]);


