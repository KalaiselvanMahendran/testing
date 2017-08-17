var myapp = angular.module('app', ['ui.router', 'ckeditor']);

myapp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // home
        .state('home', {
            url: '/',
            templateUrl: '/server/partials/home.html',
            controller: 'homeController'
        })

        // post
        .state('post', {
            url: '/post',
            templateUrl: '/server/partials/post/index.html',
            controller: 'postController'
        })

        .state('post-create', {
            url: '/post/create',
            templateUrl: '/server/partials/post/form.html',
            controller: 'postController'
        })

        // user
        .state('user', {
            url: '/user',
            templateUrl: '/server/partials/user.html',
            controller: 'userController'
        });

});
