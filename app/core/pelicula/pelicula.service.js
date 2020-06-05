'use strict';

angular.
 module('core.pelicula').
  factory('Buscador', ['$scope','$http','$resource',
  function Hello($scope, $http, $resource) {
    $scope.listaPeliculas = [];
      $http.get(
        'http://www.omdbapi.com/?apikey=f12ba140&t=Lo+que+el+viento+se+llevo')
        .then(function successCallback(response) {
          console.log(response);
          $scope.listaPeliculas  = response.data;
          //$scope.json = response;
        }, function errorCallback(response) {
          console.log(response);
          $scope.listaPeliculas = [{name: "Error!! " + response.status}]
        });
        return $scope.listaPeliculas; //no sé si haría falta..
      }
  ]);
