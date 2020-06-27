(function() {
  'use strict';

  angular.module('myApp.pelicula')

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/pelicula', {
        templateUrl: 'pelicula/pelicula.html',
        controller: 'PeliculaCtrl'
      });
    }])

    .controller('PeliculaCtrl', [
      'GestorPeliculas',
      '$routeParams',
      '$scope',
      '$localStorage',
      peliculaCtrl
    ]);

  function peliculaCtrl(GestorPeliculas, $routeParams, $scope, $localStorage) {

    var vm = this; //vm stands for view model
    vm.nombreView2 = "Jose Andres"
    vm.miPelicula = GestorPeliculas.pelicula; //tomo el dato de factory MyService

    vm.ponerFavoritos = () => {
      $scope.$storage = $localStorage;
      console.log("en poner favoritos---->: " + vm.miPelicula);
      if ($localStorage.project === undefined) {
        $localStorage.project = [];
      }
      $scope.$storage.project.push(vm.miPelicula);

    }

  };
})();
