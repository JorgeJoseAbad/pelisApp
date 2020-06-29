(function() {

  'use strict';

  angular.module('myApp.peliculas')

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/peliculas', {
        templateUrl: 'peliculas/peliculas.html',
        controller: 'PeliculasCtrl'
      });
    }])

    .controller('PeliculasCtrl', [
      'GestorPeliculas',
      '$scope',
      '$http',
      'Buscador',
      peliculasCtrl
    ])

  function peliculasCtrl(GestorPeliculas, $scope, $http, Buscador) {

    var vm = this;

    console.log("Que es vm?: ", vm);
    vm.titulo = "";
    vm.year = "";
    vm.listaPeliculas = [];
    vm.error;
    vm.resultadoError = "";

    vm.goToPelicula = (pelicula) => {
      console.log(pelicula);
      GestorPeliculas.pelicula = pelicula;
    };

    vm.buscaPeliculas = () => {
      console.log("estamos en busca pelicula", vm.titulo, vm.year);

      var dato = {
        titulo: vm.titulo,
        year: vm.year
      }
      console.log(dato);
      Buscador(dato)
        .then((response) => {
          console.log(response);
          console.log(response.data.Search);
          if (response.data.Search != undefined) {
            console.log("no es undefined: " + response.data.Search);
            vm.error = false;
            vm.listaPeliculas = response.data.Search;

          } else {
            debugger;
            console.log("es undefined: " + response.data.Search)
            vm.error = true;
            vm.resultadoError = "Error!!, No hay datos coincidentes con los criterios de búsqueda";

          }
        }, (response) => {
          console.log(response);
          vm.error = true;
          vm.resultadoError = `$Error!!, status:  ${response.status}`;


        })
        .catch((response) => {
          console.log(response);
          vm.error = true;
          vm.resultadoError = `Fallo promesa:  ${response}`;

        });
    }
  }
})();
