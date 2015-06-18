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

'use strict'

angular.module('pasaeAngularJsApp').service( 'SessionInterceptor', ['$q','$http',function($q,$http){
	return {
	 'request': function(config) {
	      // do something on success
	      return config;
	 	},
 	'responseError': function(rejection) {
 	      // do something on error
 	      if (canRecover(rejection)) {
 	        return responseOrNewPromise
 	      }
 	      return $q.reject(rejection);
 	    }
	};
}]);