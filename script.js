var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: "login.html"
	})
	.when('/', {
		templateUrl: "index.html"
	})
	.otherwise({
		redirectTo: "/login"
	})
});

myApp.controller('LoginCtrl', function($scope){
	$scope.title = "Login | Ashraful Islam";
});