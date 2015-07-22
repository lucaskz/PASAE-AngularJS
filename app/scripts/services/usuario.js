'use strict';

angular.module('pasaeAngularJsApp').service( 'UsuarioService', ['$q','$http','$httpParamSerializer','$rootScope',function($q,$http,$httpParamSerializer,$rootScope){
  return {

	        crearUsuario : function(usuario){
                var deferred = $q.defer();
                if (usuario.rol=='ROLE_EMPLEADO') {
                  $http.post('http://localhost:8080/web-module/empleado',usuario).then(function(successData){
                    var data = successData;
                    deferred.resolve(data);
                  },function(error){
                    deferred.reject(error);
                  });
                }
                else {
                  $http.post('http://localhost:8080/web-module/administrador',usuario).then(function(successData){
                    var data = successData;
                    deferred.resolve(data);
                  },function(error){
                    deferred.reject(error);
                  });
                }

                return deferred.promise;
          },

          editarEspectaculo:function() {

                 var deferred = $q.defer();

                 $http.get('http://localhost:8080/web-module/usuario/0').then(function(successData){
                    var data = successData;
                   	deferred.resolve(data);
                 },function(error){
                    deferred.reject(error);
                 });
                 return deferred.promise;
          }
  }
}]);
