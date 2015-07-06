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

angular.module('pasaeAngularJsApp').service( 'ErrorInterceptor', ['$q','$cookies',function($q,$cookies){
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

            if (rejection.status == 401)
            {
                $rootScope.signOut();
            }

            return $q.reject(rejection);
        },
	};
}]);