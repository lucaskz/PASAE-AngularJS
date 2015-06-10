'use strict';

angular.module('pasaeAngularJsApp').service( 'TestService', [function(){
	return {
		print : function(){
			console.log('test');
		}
	};
}]);