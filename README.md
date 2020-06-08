# pelisApp

## Version 1.0

ha sido generada a partir de un commit de angular-seed que empleaba AngularJS 1.4.

La versión de AngularJS empleada es la 1.4.14. angular.version:
```
{full: "1.4.14", major: 1, minor: 4, dot: 14, codeName: "material-distinction"}
```

Se ha elegido mantener una estructura próxima a la de componentes empleada en Angular, módulo y controlador y plantilla en la misma carpeta. En vez de separar vistas (templates), controladores, etc.

### Incluye las funcionalidades básicas:

--> Obtención de datos de un API REST en http://www.omdbapi.com/ (key a utilizar: f12ba140).
--> Visualización de películas, las peticiones realizadas con promesas.
--> Visualización de detalle de cada película (reutilización del modelo almacenado del punto anterior).
--> Añadir películas favoritas en el localstorage.
--> Visualización de favoritas.
--> Mock de inicio de sesión usuarios y almacenaje en sesión storage (Interceptor para simular backend).
--> La versión AngularJs 1.4.14
--> SaSS
--> Bootstrap 3
--> Versión de JavaScript es6
--> Gestor de dependencias Bower
--> Jade.
--> Gulp: Construcción y arranque desde gulpfile.js

--> Servido desde carpeta distribución (dist)

### Puntos aún pendientes de incluir o mejorar:

--> Reworking y limpieza de código.

Nota importante: en este momento el arranque esta configurado en gulpfile
para entrar por dist.
```
return src('dist')
```
Si se desea entrar por desarrollo, cambiar a:
```
return src('app')
```

## Instalación

Como es habitual para descargarla y ejecutarla hay que emplear el comando github

```
git clone https://github.com/JorgeJoseAbad/pelisApp.git
cd pelisApp
```
una vez allí basta con ejecutar desde consola el comando

```
npm install
```
Para instalar las dependencias en node_modules y en bower_components.

Una vez hecho esto, ejecutar:

```
npm start
```
para arrancar la aplicación

Entrar por:

```
http://localhost:8000/
```

## Funcionalidades

Una vez levantado y dirigidos a http://localhost:8000/

La aplicación lleva a la página de login, donde nombre usuario y contraseña son comparados con los que están en el Mock, y que son visibles en el Session Storage.

En caso de que usuario y contraseña sean correctos SessionStorage es actualizado.

Y navegamos a la página de peliculas, donde podemos buscar por título, o por título y año.

Mostrándose el listado de películas encontrado o un mensaje de error.

Pulsando sobre una de ellas la llevamos a la página de pelicula; donde vemos como detalle el año de producción. Y podemos añadirla al listado de películas favoritas que están almacenadas en localstorage.

Podemos visualizar las películas favoritas accediendo desde el menú principal a la página de favoritas. Desde ésta se puede también ir a la  página de película individual pulsando sobre una de ellas.

## Ramas del repositorio
### master:
Estado actual
### dev:
Continua el desarrollo
