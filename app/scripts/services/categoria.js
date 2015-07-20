'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').service('CategoriaService', ['$q','$http','$cookies','$httpParamSerializer',function($q,$http,$cookies,$httpParamSerializer) {

      return{
           getCategorias : function(){
                var deferred = $q.defer();

                $http.get('http://localhost:8080/web-module/categoria/listado_categorias').then(function(successData){
                  var data = successData;

                  deferred.resolve(data);
                  },function(error){
                    deferred.reject(error);
                  });
                return deferred.promise;
            }
      }


   }]);
