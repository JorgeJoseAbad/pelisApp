'use strict';

angular.module('header')

.directive('myHeader',myHeader);

function myHeader(){
  console.log("estoy en directiva de myHeader");
  return {
    templateUrl: './header/header.html'
  };
}
