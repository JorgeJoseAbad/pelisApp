(function() {
  'use strict';

  angular.module('myApp.favoritas')

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/favoritas', {
        templateUrl: 'favoritas/favoritas.html',
        controller: 'FavoritasCtrl'
      })
      .when('/pelicula', {
        templateUrl: 'pelicula/pelicula.html',
      })
    }])

    .controller('FavoritasCtrl',
      ['GestorPeliculas',
        '$routeParams',
        '$scope',
        '$localStorage',
        '$sessionStorage',
        '$location',
        FavoritasCtrl
      ])

  function FavoritasCtrl(
    GestorPeliculas,
    $routeParams,
    $scope,
    $localStorage,
    $sessionStorage,
    $location,
  ) {
    console.log("Controlador activo de favoritas");

    let vm = this;

    vm.favoritas = []; //tomo el dato de factory MyService

    vm.error = false;
    vm.$storage = $localStorage;

    console.log(vm.$storage);
    console.log(vm.$storage.project);

    vm.favoritas = vm.$storage.project;

    //$scope.$storage.project.push($scope.miPelicula);

    vm.goToPelicula = (pelicula) => {
      console.log(pelicula);
      GestorPeliculas.pelicula = pelicula;
      GestorPeliculas.coleccionable = false;

    };

    vm.goPeliculaButton = (pelicula) => {
      console.log("pelicula", pelicula);
      GestorPeliculas.pelicula = pelicula;
      GestorPeliculas.coleccionable = false;
      $location.url('/pelicula');
    }

    vm.eliminar = (pelicula) => {
      console.log("Voy a eliminar: ---> ", pelicula)
      vm.$storage.project.forEach((item, i) => {
         console.log(item);
         if (item==pelicula) vm.$storage.project.splice(i,1);
      });


    }

  }

})();
