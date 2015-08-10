'use strict';

angular.module('pasaeAngularJsApp').service( 'UsuarioService', ['$q','$http','$httpParamSerializer','$rootScope','config',function($q,$http,$httpParamSerializer,$rootScope,config){
  return {

	        crearUsuario : function(usuario){
                var deferred = $q.defer();
                if (usuario.rol=='ROLE_EMPLEADO') {
                  $http.post(config.apiUrl+'web-module/empleado',usuario).then(function(successData){
                    var data = successData;
                    deferred.resolve(data);
                  },function(error){
                    deferred.reject(error);
                  });
                }
                else {
                  $http.post(config.apiUrl+'web-module/administrador',usuario).then(function(successData){
                    var data = successData;
                    deferred.resolve(data);
                  },function(error){
                    deferred.reject(error);
                  });
                }

                return deferred.promise;
          },


          getListadoEmpleados : function () {

                var deferred = $q.defer();
                $http.get(config.apiUrl+'web-module/empleado/listadoempleados').then(function(successData) {

                  var data = successData;
                  deferred.resolve(data);
                },function(error){
                  deferred.reject(error);
                });
                return deferred.promise;

          },

         getListadoEspectadores : function () {

                    var deferred = $q.defer();
                    $http.get(config.apiUrl+'web-module/espectador/listadoespectadores').then(function(successData) {

                      var data = successData;
                      deferred.resolve(data);
                    },function(error){
                      deferred.reject(error);
                    });
                    return deferred.promise;

          },


           getDataEspectadores : function(idEspectador){

                var deferred = $q.defer();
                $http.get(config.apiUrl+'web-module/espectador/' + idEspectador).then(function(successData){
                  var data = successData;
                  deferred.resolve(data);
                },function(error){
                  deferred.reject(error);
                });
                return deferred.promise;

           },

           getDataEmpleados: function(idEmpleado){

                           var deferred = $q.defer();
                           $http.get(config.apiUrl+'web-module/empleado/' + idEmpleado).then(function(successData){
                             var data = successData;
                             deferred.resolve(data);
                           },function(error){
                             deferred.reject(error);
                           });
                           return deferred.promise;

           },

          editarUsuario:function() {

                 var deferred = $q.defer();

                 $http.get(config.apiUrl+'web-module/usuario/0').then(function(successData){
                    var data = successData;
                   	deferred.resolve(data);
                 },function(error){
                    deferred.reject(error);
                 });
                 return deferred.promise;
          }
  }
}]);
