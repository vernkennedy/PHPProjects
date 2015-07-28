var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://raw.githubusercontent.com/vernkennedy/PHPProjects/gh-pages/PHPProjects1.json")
  .success(function (response) {$scope.names = response.records;});
});