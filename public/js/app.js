// var app = angular.module('app', ['ngRoute']);
 
// app.config(function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
// {
//     app.controllerProvider = $controllerProvider;
//     app.compileProvider    = $compileProvider;
//     app.routeProvider      = $routeProvider;
//     app.filterProvider     = $filterProvider;
//     app.provide            = $provide;

//     // Register routes with the $routeProvider
// });

// app.config(['$routeProvider', function ($routeProvider) {
// 	$routeProvider.when('/home', {
// 		templateUrl: 'templates/home.html',
// 		controller: 'HomeCtrl'
// 	})
// 	.when('/about', {
// 		templateUrl: 'templates/about.html',
// 		controller: 'AboutCtrl'
// 	})
// 	.when('/contact', {
// 		templateUrl: 'templates/contact.html',
// 		controller: 'ContactCtrl'
// 	})
// 	.when('/blog', {
// 		templateUrl: 'templates/blog.html',
// 		controller: 'BlCtrl'
// 	})
// 	.otherwise({ redirectTo: '/' })
// }]);

// app.controller('HomeCtrl', ['$scope', function ($scope) {
// 	function init() {
// 		console.log('here');
// 	}
// 	init();
// 	$scope.messages = "This is messages";
// }])

// app.controller('BlCtrl', ['$scope', 'SevicePosts', function ($scope, SevicePosts) {
	
// 	function init () {
// 		var data = {
// 			'data1': 1,
// 			'data2': 2
// 		};

// 		SevicePosts.getPosts(data).then(function(data) {
// 			$scope.posts = data.posts;
// 		});
// 	}

// 	init();
// }])

// app.service('SevicePosts', ['$http', '$q', function ($http, $q) {
	
// 	this.getPosts = function(params) {
// 		var defer = $q.defer();

// 		$http({
//             //url: "posts/get?request="+JSON.stringify(params),
//             //method: 'GET',
//             url: "posts/get",
//             method: 'POST',
//             data: params,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).success(function(data) {
// 			defer.resolve(data);
// 		})
// 		.error(function(data) {
// 			defer.reject(data);
// 		})
// 		return defer.promise;
// 	}
// }])

var pollsApp = angular.module('app', ['ngRoute', 'cfp.loadingBar']);

function pollsAppRouteConfig($routeProvider) {
    	$routeProvider.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'AboutCtrl'
		})
		.when('/contact', {
			templateUrl: 'templates/contact.html',
			controller: 'ContactCtrl'
		})
		.when('/blog', {
			templateUrl: 'templates/blog.html',
			controller: 'BlCtrl'
		})
		.otherwise({ redirectTo: '/' })
}
pollsApp.config(pollsAppRouteConfig);