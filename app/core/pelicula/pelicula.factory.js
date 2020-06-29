(function() {
  'use strict';

  angular.
  module('core.pelicula').
  factory('Buscador', ['$http', buscador]);

  function buscador($http) {
    return function(dato) {
      var listaPeliculas = [];
      console.log("en factory Buscador dato es", dato.titulo, dato.year);
      return $http.get(`http://www.omdbapi.com/?apikey=f12ba140&s=${dato.titulo}&y=${dato.year}&plot=full`)
    }

  }

})();
