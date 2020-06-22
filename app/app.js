'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngStorage',
  'myApp.core',
  'myApp.peliculas',
  'myApp.pelicula',
  'myApp.favoritas',
  'myApp.login',
  'myApp.version'
]).
factory("GestorPeliculas", function() {
  return {
    pelicula: "prueba test"
  };
}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/peliculas', {
       templateUrl: 'peliculas/peliculas.html',
       controller: 'PeliculasCtrl'
     })
     .when('/pelicula', {
       templateUrl: 'pelicula/pelicula.html',
       controller: 'PeliculaCtrl'
     })
     .when('/favoritas',{
       templateUrl:'favoritas/favoritas.html',
       controller:'FavoritasCtrl'
     })
     .otherwise({redirectTo: '/login'});
}]);
