(function() {
  'use strict';

  angular.
  module('core.pelicula').
  factory('Buscador', ['$http', buscador]);

  function buscador($http) {
    return function(titulo, year) {
      var listaPeliculas = [];
      console.log("en factory Buscador dato es", titulo, year);
      return $http.get(`http://www.omdbapi.com/?apikey=f12ba140&s=${titulo}&y=${year}&plot=full`)
    }

  }

})();
