'use strict';

angular.module('pasaeAngularJsApp').service( 'SessionService', [function(){
	return {
		register : function(){
			
		}
		autenticate : function(){
			$http.get('user', {headers : headers}).success(function(data) {
			      if (data.name) {
			    	  //En vez de root scope deberia usar cookies
			    	$cookie.authenticated = true;
			      } else {
			    	$cookie:authenticated = false;			      
			      }
			      callback && callback();
			    }).error(function() {
			      $cookie.authenticated = false;
			      callback && callback();
			    });
		}
		login :  function() {
		      authenticate($scope.credentials, function() {
		          if ($cookie.authenticated) {
		            $location.path("/");
		            $scope.error = false;
		          } else {
		            $location.path("/login");
		            $scope.error = true;
		          }
		        });
		    };
	};
}]);