'use strict';

angular.module('myApp.favoritas')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/favoritas', {
      templateUrl: 'favoritas/favoritas.html',
      controller: 'FavoritasCtrl'
    });
  }])

  .controller('FavoritasCtrl',
    ['GestorPeliculas',
      '$routeParams',
      '$scope',
      '$localStorage',
      '$sessionStorage',
      favoritasCtrl
    ])

function favoritasCtrl(GestorPeliculas, $routeParams, $scope, $localStorage, $sessionStorage) {
  console.log("Controlador activo de favoritas");

  $scope.favoritas = []; //tomo el dato de factory MyService

  $scope.error = false;
  $scope.$storage = $localStorage;

  console.log($scope.$storage);
  console.log($scope.$storage.project);

  $scope.favoritas = $scope.$storage.project;

  //$scope.$storage.project.push($scope.miPelicula);

  $scope.goToPelicula = (pelicula) => {
    console.log(pelicula);
    GestorPeliculas.pelicula = pelicula;
  };


}
