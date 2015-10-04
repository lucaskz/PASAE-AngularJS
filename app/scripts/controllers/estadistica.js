'use strict';

/**
 * @ngdoc function
 * @name pasaeAngularJsApp.controller:AboutCtrl
 * @description
 * # RegisterController
 * Controller of the pasaeAngularJsApp
 */
angular.module('pasaeAngularJsApp').controller('EstadisticaCtrl', function ($scope,$state,$stateParams,$sessionStorage) {



    $scope.chartConfig = {
            options: {
                chart: {
                    type: 'line',
                    zoomType: 'x'
                }
            },
            series: [{
                data: [10, 15, 12, 8, 7, 1, 1, 19, 15, 10]
            }],
            title: {
                text: 'Ventas Generales'
            },
            xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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


   $scope.addPoints = function () {
        var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    $scope.addSeries = function () {
        var rnd = []
        for (var i = 0; i < 10; i++) {
            rnd.push(Math.floor(Math.random() * 20) + 1)
        }
        $scope.chartConfig.series.push({
            data: rnd
        })
    }

    $scope.removeRandomSeries = function () {
        var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray.splice(rndIdx, 1)
    }

    $scope.toggleLoading = function () {
        this.chartConfig.loading = !this.chartConfig.loading
    }

    VentaService.listadoVentas().then(function(data) {
   	        $scope.ventas = data.data;
         	},
         	function(error) {
         	  $scope.loading = false;

           });




});
