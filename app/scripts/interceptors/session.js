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

angular.module('pasaeAngularJsApp').service( 'SessionInterceptor', ['$q','$cookies',function($q,$cookies){
	return {
	 'request': function(config) {
	      // do something on success
		 if($cookies.authenticated == true){
			 config.headers['X-Auth-Token'] = $cookies.token;
		 }		  
	      return config;
	 	},
 	'responseError': function(rejection) {
 	      // do something on error
 	      if (canRecover(rejection)) {
 	        return responseOrNewPromise;
 	      }
 	      return $q.reject(rejection);
 	    }
	};
}]);