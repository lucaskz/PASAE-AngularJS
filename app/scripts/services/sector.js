'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').service('SectorService', ['$q','$http','$cookies','$httpParamSerializer','config',function($q,$http,$cookies,$httpParamSerializer,config) {

    return{
    	 crearSector : function(sector){
             var deferred = $q.defer();              
                 $http.post(config.apiUrl+'web-module/sector',sector).then(function(successData){
                   var data = successData;
                   deferred.resolve(data);
                   },function(error){
                     deferred.reject(error);
                   });
                 return deferred.promise;
         },
         getSector : function(sector){
             var deferred = $q.defer();              
                 $http.get(config.apiUrl+'web-module/sector/getsector/'+sector).then(function(successData){
                   var data = successData;
                   deferred.resolve(data);
                   },function(error){
                     deferred.reject(error);
                   });
                 return deferred.promise;
         },
         getSectores : function(espectaculo){
        	 var sectores = 
        		 [{id : '1',
        		   monto : '200',
        		   nombre : ' Sector A',
        		   filas : [{
        			   numero : '1',
        			   asientos : [{numero : '1',ocupado:'true'},{numero : '2',ocupado:'true'},{numero : '3',ocupado: 'false'},{numero : '4',ocupado: 'false'},{numero : '5',ocupado: 'false'}]
        		   		},{
        		   	   numero : '2',
        		   	   asientos : [{numero : '1',ocupado: 'false'},{numero : '2',ocupado: 'false'},{numero : '3',ocupado: 'false'},{numero : '4',ocupado: 'false'},]
        		   		},{
         		   	   numero : '2',
        		   	   asientos : [{numero : '1',ocupado: 'false'},{numero : '2',ocupado:'true'},{numero : '3',ocupado:'true'},{numero : '4',ocupado: 'false'},]
        		   		}
        		   ]},
        		  {id:'2', 
        		   monto : '300', 
        		   nombre : 'Sector B',
        		   filas : [{
        			   numero : '1',
        			   asientos : [{numero : '1',ocupado: 'false'},{numero : '2',ocupado:'true'},{numero : '3',ocupado:'true'},{numero : '4',ocupado: 'false'},{numero : '5',ocupado: 'false'}]
        		   		},{
        		   	   numero : '2',
        		   	   asientos : [{numero : '1',ocupado: 'false'},{numero : '2',ocupado: 'false'},{numero : '3',ocupado: 'false'},{numero : '4',ocupado:'true',ocupado: 'false'},]
        		   		}
        		   ]}];
        	 return sectores;
         }
    }
   }]);
