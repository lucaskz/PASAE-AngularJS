'use strict';

angular.module('pasaeAngularJsApp').service( 'UsuarioService', ['$q','$http','$httpParamSerializer','$rootScope',function($q,$http,$httpParamSerializer,$rootScope){
	return {
//		register : function(user){
//			var deferred = $q.defer();
//			$http.post('http://localhost:8080/web-module/espectador', user).then(function(successData){
//				var data = successData;
//				// se registra exitosamente el usuario devuelvo la informacion para logearlo
//				deferred.resolve(data);
//				},function(error){
//					deferred.reject(error);
//				});
//			return deferred.promise;
//		},
		getUserData : function(){
			var deferred = $q.defer();

			$http.get('http://localhost:8080/web-module/espectador/0').then(function(successData){
				var data = successData;

				deferred.resolve(data);
				},function(error){
					deferred.reject(error);
				});
			return deferred.promise;
		}

	};
}]);
