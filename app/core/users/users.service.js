
angular.module('core.users')
  .factory('UsersService', () => {
        var usersService = {};

        usersService.get = () => {
          let usuariosAutorizados = [
            {username:"usuario1",password:"password1"},
            {username:"usuario2",password:"password2"},
            {username:"Gengis",password:"Khan"},
            {username:"Miguel",password:"Strogoff"}
          ]
            return usuariosAutorizados;
        };


        return usersService;
    });
