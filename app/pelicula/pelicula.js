'use strict';

angular.module('myApp.pelicula', ['ngRoute','ngStorage'])

.config(['$routeProvider',  function($routeProvider) {
  $routeProvider.when('/pelicula', {
    templateUrl: 'pelicula/pelicula.html',
    controller: 'PeliculaCtrl'
  });
}])

.controller('PeliculaCtrl', ['GestorPeliculas','$routeParams','$scope', '$localStorage', function(GestorPeliculas, $routeParams, $scope, $localStorage) {
  $scope.nombreView2 = "Jose Andres"
  $scope.miPelicula = GestorPeliculas.pelicula; //tomo el dato de factory MyService

  $scope.ponerFavoritos = () =>{
    $scope.$storage = $localStorage;
    console.log("en poner favoritos---->: "+$scope.miPelicula);
    if ($localStorage.project === undefined) {
      $localStorage.project = [];
    }
    $scope.$storage.project.push($scope.miPelicula);

  }

}]);
