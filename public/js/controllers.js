pollsApp.controller('BlCtrl', ['$scope', 'PostsService', 'cfpLoadingBar', function ($scope, PostsService, cfpLoadingBar) {
    
    function init() {
        var data = {
            'data1': 1,
            'data2': 2
        };

        cfpLoadingBar.start();
        PostsService.postData(data).then(function(data) {
            $scope.posts = data.posts;
            cfpLoadingBar.complete()
        });
    }

    function mask(visible) {
        return visible ? true : false;
    }

    init();

}]);

pollsApp.controller('ContactCtrl', ['$scope', 'PostsService', 'cfpLoadingBar', function ($scope, PostsService, cfpLoadingBar) {
    
    function init() {
        var data = {
            'data1': 1,
            'data2': 2
        };
        
        cfpLoadingBar.start();
        PostsService.postData(data).then(function(data) {
            $scope.posts = data.posts;
            cfpLoadingBar.complete()
        });
    }

    function mask(visible) {
        return visible ? true : false;
    }

    init();

}]);