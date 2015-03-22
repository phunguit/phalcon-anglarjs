'use strict';

//angular.module('core').controller('BlCtrl', ['$scope', function ($scope) {
angular.module('app').controllerProvider.resgister('BlCtrl', ['$scope', function($scope) {

		function init () {
			var data = {
				'data1': 1,
				'data2': 2
			};

			SevicePosts.getPosts(data).then(function(data) {
				console.log(data);
				$scope.posts = data.posts;
			});
		}

		init();
		
	}
]);
