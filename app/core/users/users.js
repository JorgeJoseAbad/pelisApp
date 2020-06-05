'use strict';

 angular.module('core.users',[])
  .factory('UsersService', function() {
        var usersService = {};

        userService.get = function() {
          let usuariosAutorizados = [
            {username:"usuario1",password:"password1"},
            {username:"usuario2",password:"password2"},
            {username:"Gengis",password:"Khan"}
          ]
            return usuariosAutorizados;
        };


        return userService;
    });
