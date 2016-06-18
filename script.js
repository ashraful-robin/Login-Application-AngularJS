var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: "login.html"
	})
	.when('/home', {
		templateUrl: "home.html"
	})
	.otherwise({
		redirectTo: "/"
	});
});

myApp.controller('LoginCtrl', function($scope, $location){
	$scope.title = "Login | Ashraful Islam";

	$scope.login = function(uname, passwd){
		if(uname=="admin" && passwd == "admin"){
			$location.path("/");
		}
	};
});