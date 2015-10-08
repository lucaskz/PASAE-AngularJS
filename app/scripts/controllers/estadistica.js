'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('EstadisticaCtrl', function ($scope,$state,$stateParams,VentaService,$sessionStorage) {

$scope.chartData = [ ];
$scope.chartData2= [ ];

    $scope.chartConfig = {
            options: {
                chart: {
                    type: 'column',
                    zoomType: 'x',
                    renderTo: 'contenedor2'
                }
            },
            series: [ {data:$scope.chartData} ],
            title: {
                text: 'Ventas Generales'
            },
            xAxis: {
                    categories: $scope.chartData2
             },
             yAxis: {
                        title: {
                                 text: 'CANTIDAD VENDIDA'
                             },
                             plotLines: [{
                                     value: 0,
                                     width: 1,
                                     color: '#4572A7'
                                 }]
                         },
            loading: false

    }



       VentaService.listadoVentas().then(function(data) {

            $scope.ventas=data.data;

             angular.forEach($scope.ventas, function(venta){
               $scope.chartData.push(venta.cantidad);
               $scope.chartData2.push(venta.mes);
             })
       },
       function(error) {
         	  $scope.loading = false;

      });




});
