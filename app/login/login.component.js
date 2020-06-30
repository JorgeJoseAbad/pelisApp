(function() {
  'use strict';

  angular.module('myApp.login')

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
      'UsersService',
      LoginController]);

      function LoginController($scope, $location, $sessionStorage, UsersService) {

        //los usuarios autorizados desde el mock.
        console.log(UsersService.get());

        $sessionStorage.valueToShare = UsersService.get();
        $scope.update = update;

        function update(user, esto) {
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
            if (item.username === usuario && item.password === password) {
              usuarioEncontrado = true;
              alert("Bienvenido!  " + usuario);
              $sessionStorage.valueToShare = {
                usuario,
                password
              };
              $location.path('/peliculas');
            }
          });

          if (!usuarioEncontrado) alert("Usuario no autorizado!");

          return false;

        };

      }
})();
