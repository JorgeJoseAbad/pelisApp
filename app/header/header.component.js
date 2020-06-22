'use strict';

angular.module('header')

.controller('headerController',['$scope',function($scope){
    $scope.prueba={
      campo1 : "campo1",
      campo2 : "campo2"
    }
}])

.directive('myHeader',function(){
  console.log("estoy en directiva de myHeader");
  return {
    templateUrl: './header/header.html'
  };
})
