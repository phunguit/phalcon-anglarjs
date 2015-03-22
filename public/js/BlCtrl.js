'use strict';

//angular.module('core').controller('BlCtrl', ['$scope', function ($scope) {
angular.module('app').controllerProvider.resgister('BlCtrl', ['$scope', function($scope) {

		function init () {
			console.log("aaaa");
			// var data = {
			// 	'data1': 1,
			// 	'data2': 2
			// };

			// SevicePosts.getPosts(data).then(function(data) {
			// 	console.log(data);
			// 	$scope.posts = data.posts;
			// });
		}

		init();
		
	}
]);
