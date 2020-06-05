'use strict';

angular.module('myApp.login', [
  'ngRoute',
  'ngStorage'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginController'
  });
}])

.controller('loginController', [
  '$scope',
  '$location',
  '$sessionStorage',
  function($scope,$location,$sessionStorage) {

  /**
  * datos mock para sesion storage se cargan al lanzar el controlador
  */
  let usuariosAutorizados = [
    {username:"usuario1",password:"password1"},
    {username:"usuario2",password:"password2"},
    {username:"Gengis",password:"Khan"}
  ]

  $sessionStorage.valueToShare = usuariosAutorizados;


   $scope.update = function(user,esto) {
     console.log(user);
     console.log(esto);

     let usuario = user.username;
     let password = user.password;
     let usuarioEncontrado = false;
     let arrayUsuariosAutorizados = $sessionStorage.valueToShare;

     //Validamos el usuario
     if (usuario == "" || usuario == undefined) {
         alert("Debe proporcionar un nombre de usuario");
         return false;
     }

     //Validamos el password
     if (password == "" || password.length < 3) {
         alert("Debe proporcionar un password al menos de 3 caracteres");
         return false;
     }

     /**
     * leemos sesion storage y si coincide con los datos de entrada
     * da acceso a la aplicación
     */
     arrayUsuariosAutorizados.forEach((item, i) => {
       if (item.username === usuario && item.password === password){
         usuarioEncontrado = true;
         alert("Bienvenido!  "+ usuario);
         $location.path('/peliculas');
       }
     });

     if (!usuarioEncontrado) alert("Usuario no autorizado!");

     return false;

   };

}]);
