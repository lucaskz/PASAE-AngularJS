'use strict';

angular.module('pasaeAngularJsApp').service( 'SessionService', ['$q','$http','$cookies',function($q,$http,$cookies){
	return {
		register : function(user){
			var deferred = $q.defer();
			$http.post('register', user).then(function(successData){
				var data = successData;
				// se registra exitosamente el usuario devuelvo la informacion para logearlo
				deferred.resolve(data);				
				},function(error){
					deferred.reject(error);
				});
			return deferred.promise;
		},
		authenticate : function(credentials){
			var deferred = $q.defer();
		
			//Defino el header	
//			var headers = credentials ? {authorization : 'Basic ' + btoa(credentials.username + ":" + credentials.password)
//		    } : {};
				
			$http.post('http://localhost:8080/web-module/login', {username:credentials.username,password:credentials.password}).then(function(data) {
				$cookie.authenticated = true;		
				$cookie.token = data.token;
			    deferred.resolve(data);
			    }),function(error) {
			      $cookie.authenticated = false;
			      console.log(data);
			      console.log(status);
			      console.log(headers);
			      console.log(config);
			      deferred.reject(error);
			    }
			return deferred.promise;
//		    var headers = {
//					'Access-Control-Allow-Origin' : '*',
//					'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
//					'Content-Type': 'application/x-www-form-urlencoded',
//					'Accept': 'application/json'
//				};
//
//				return $http({
//					method: "POST",
//					headers: headers,
//		            url: 'http://localhost:8080/web-module/login',
//					data: {"email":"my@email.com","password":"secret"}
//		    }).success(function(result) {
//						console.log("Auth.signin.success!")
//						console.log(result);
//		    }).error(function(data, status, headers, config) {
//						console.log("Auth.signin.error!")
//		        console.log(data);
//		        console.log(status);
//		        console.log(headers);
//		        console.log(config);
//		    });
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