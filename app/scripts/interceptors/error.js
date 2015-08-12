/**
 * 
 */

//$httpProvider.interceptors.push(function($q, $cookies) {
//    return {
//     'request': function(config) {
//
//          config.headers['Token'] = $cookies.loginTokenCookie;
//          return config;
//      }
//    };
//  });

'use strict';

angular.module('pasaeAngularJsApp').service( 'ErrorInterceptor', ['$q','$cookies','$location','$rootScope',function($q,$cookies,$location,$rootScope){
	return {
//	 'request': function(config) {
//	      // do something on success
//		 if($cookies.authenticated == true){
//			 config.headers['X-Auth-Token'] = $cookies.token;
//		 }		  
//	      return config;
//	 	},
	'responseError': function(rejection)
        {
            // Error found ..
		$rootScope.error = {};
		
			if(rejection.status == 404){
				$rootScope.error.status = rejection.status;
				$rootScope.error.code = 404;
				$rootScope.error.msg = 'Page not found';
				$location.path('/error');
			}
			
            if (rejection.status == 401)
            {
            	$rootScope.error.status = rejection.status;
            	$rootScope.error.code = 401;
            	$rootScope.error.msg = 'Unauthorized';
            	$location.path('/error');
            }
            
            if (rejection.status == 403)
            {
            	$rootScope.error.status = rejection.status;
            	$rootScope.error.code = 403;
            	$rootScope.error.msg = 'Forbidden';
            	$location.path('/error');
            }

            return $q.reject(rejection);
        },
	};
}]);