'use strict';

angular.module('pasaeAngularJsApp').service( 'SessionService', ['$q','$http',function($q,$http){
	return {
		register : function(user){
			var deferred = $q.defer();
			$http.get('register', user).then(function(successData){
				var data = successData
				// se registra exitosamente el usuario devuelvo la informacion para logearlo
				deferred.resolve(data);				
				},function(error){
					deferred.reject(error);
				})
			return deferred.promise;
		}
		authenticate : function(user){
			var deferred = $q.defer():
		
			//Defino el header	
			var headers = credentials ? {authorization : "Basic "
		        + btoa(user.email + ":" + user.password)
		    } : {};
				
			$http.get('authenticate', {headers : headers}).then(function(data) {
				$cookie.authenticated = true;			      
			    deferred.resolve(data);
			    }),function(error) {
			      $cookie.authenticated = false;
			      deferred.reject(error);
			    })
			return deferred.promise;
		}
//		login :  function() {
//		      authenticate($scope.credentials, function() {
//		          if ($cookie.authenticated) {
//		            $location.path("/");
//		            $scope.error = false;
//		          } else {
//		            $location.path("/login");
//		            $scope.error = true;
//		          }
//		        });
//		    };
	};
}]);