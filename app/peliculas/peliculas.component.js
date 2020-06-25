'use strict';

angular.module('myApp.peliculas')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/peliculas', {
      templateUrl: 'peliculas/peliculas.html',
      controller: 'PeliculasCtrl'
    });
  }])

  .controller('PeliculasCtrl', ['GestorPeliculas', '$scope', '$http', 'Buscador', (GestorPeliculas, $scope, $http, Buscador) => {

    $scope.titulo = "";
    $scope.year = "";
    $scope.listaPeliculas = [];
    $scope.error = false;
    $scope.resultadoError = "";


    $scope.goToPelicula = (pelicula) => {
      console.log(pelicula);
      GestorPeliculas.pelicula = pelicula;
    };

    $scope.buscaPeliculas = () => {

      console.log("estamos en busca pelicula", $scope.titulo, $scope.year);

      Buscador($scope.titulo, $scope.year)
        .then((response) => {
          console.log(response.data.Search);
          if (response.data.Search != undefined) {
            console.log("no es undefined: " + response.data.Search);
            $scope.error = false;
            $scope.listaPeliculas = response.data.Search;
          } else {
            console.log("es undefined: " + response.data.Search)
            $scope.error = true;
            $scope.resultadoError = "Error!!, No hay datos coincidentes con los criterios de búsqueda";
          }
        }, (response) => {
          console.log(response);
          $scope.error = true;
          $scope.resultadoError = `$Error!!, status:  ${response.status}`;

        })
        .catch((response) => {
          console.log(response);
          $scope.error = true;
          $scope.resultadoError = `Fallo promesa:  ${response}`;
        });
    }

  }]);
