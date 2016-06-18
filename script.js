var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: "login.html"
	})
	.when('/home', {
		resolve:{
			"check": function($location, $rootScope){
				if(!$rootScope.loggedIn){
					$location.path("/login")
				}
			}
		}
		// templateUrl: "home.html"
	})
	.otherwise({
		redirectTo: "/"
	});
});

myApp.controller('LoginCtrl', function($scope, $location, $rootScope){
	$scope.title = "Login | Ashraful Islam";

	$scope.login = function(uname, passwd){
		if(uname=="admin" && passwd == "admin"){
			$rootScope.loggedIn = true;
			$location.path("/home");
		}
	};
});