define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/home': {
                templateUrl: 'templates/home.html',
                dependencies: [
                    'controllers/HomeCtrl'
                ]
            },
            '/about': {
                templateUrl: 'templates/about.html',
                dependencies: [
                    'controllers/AboutViewController',
                    'directives/app-color'
                ]
            },
            '/contact': {
                templateUrl: 'templates/contact.html',
                dependencies: [
                    'controllers/ContactCtrl'
                ]
            },
            '/blog': {
                templateUrl: 'templates/blog.html',
                dependencies: [
                    'controllers/BlCtrl'
                ]
            }
			//.otherwise({ redirectTo: '/' })
        }
    };
});