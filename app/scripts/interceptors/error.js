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

angular.module('pasaeAngularJsApp').service( 'ErrorInterceptor', ['$q','$cookies','$rootScope',function($q,$cookies,$rootScope){
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

            if (rejection.status == 401 && !rejection.config.url.endsWith('login'))
            {
            	$rootScope.$broadcast('errorStatus', rejection);
            }

            return $q.reject(rejection);
        },
	};
}]);