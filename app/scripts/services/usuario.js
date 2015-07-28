'use strict';

angular.module('pasaeAngularJsApp').service( 'UsuarioService', ['$q','$http','$httpParamSerializer','$rootScope',function($q,$http,$httpParamSerializer,$rootScope){
  return {

	        agregarEmpleado : function(usuario){
                var deferred = $q.defer();
                  $http.post('http://localhost:8080/web-module/empleado',usuario).then(function(successData){
                    var data = successData;
                    deferred.resolve(data);
                  },function(error){
                    deferred.reject(error);
                  });


                return deferred.promise;
          },


          getListadoEmpleados : function () {

                var deferred = $q.defer();
                $http.get('http://localhost:8080/web-module/empleado/listadoempleados').then(function(successData) {

                  var data = successData;
                  deferred.resolve(data);
                },function(error){
                  deferred.reject(error);
                });
                return deferred.promise;

          },

         getListadoEspectadores : function () {

                    var deferred = $q.defer();
                    $http.get('http://localhost:8080/web-module/espectador/listadoespectadores').then(function(successData) {

                      var data = successData;
                      deferred.resolve(data);
                    },function(error){
                      deferred.reject(error);
                    });
                    return deferred.promise;

          },

          getListadoEspectadoresFiltrado : function (searchValue) {

                    var deferred = $q.defer();
                    $http.get('http://localhost:8080/web-module/espectador/busquedaespectadores/' + searchValue).then(function(successData) {
                      var data = successData;
                      deferred.resolve(data);
                    },function(error){
                       deferred.reject(error);
                    });
                    return deferred.promise;

          },


           getListadoEmpleadosFiltrado : function (searchValue) {

                    var deferred = $q.defer();
                    $http.get('http://localhost:8080/web-module/empleado/busquedaempleados/' + searchValue).then(function(successData) {
                      var data = successData;
                      deferred.resolve(data);
                    },function(error){
                      deferred.reject(error);
                    });
                    return deferred.promise;

           },




           getDataEspectadores : function(idEspectador){

                var deferred = $q.defer();
                $http.get('http://localhost:8080/web-module/espectador/' + idEspectador).then(function(successData){
                  var data = successData;
                  deferred.resolve(data);
                },function(error){
                  deferred.reject(error);
                });
                return deferred.promise;

           },

           getDataEmpleados: function(idEmpleado){

                           var deferred = $q.defer();
                           $http.get('http://localhost:8080/web-module/empleado/' + idEmpleado).then(function(successData){
                             var data = successData;
                             deferred.resolve(data);
                           },function(error){
                             deferred.reject(error);
                           });
                           return deferred.promise;

           },

          modificarDatosEmpleado:function(usuario) {

                 var deferred = $q.defer();

                 $http.post('http://localhost:8080/web-module/empleado/'+usuario.id+'/cambiardatospersonales',usuario).then(function(successData){
                    var data = successData;
                   	deferred.resolve(data);
                 },function(error){
                    deferred.reject(error);
                 });
                 return deferred.promise;
          }
  }
}]);
