var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("http://vernkennedy.github.io/PHPProjects/javascripts/PHPProjects.json")
  .success(function (response) {$scope.names = response.records;});
});