pollsApp.factory('PostsService', function ($http, $q) {
        return {
            getData: function (route, param) {
                var defer = $q.defer();
                $http.get('http://localhost:8000/api/' + route + '/' + param).success(function (data) {
                        defer.resolve(data);
                    }
                ).error(function () {
                        defer.reject('An error has occurred :(');
                    }
                );
                return defer.promise;
            },
            postData: function (params) {
                var defer = $q.defer();

                $http({
                    url: "posts/get",
                    method: 'POST',
                    data: params,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function(data) {
                    defer.resolve(data);
                })
                .error(function(data) {
                    defer.reject(data);
                })
                return defer.promise;
            }
        };
    }
);
