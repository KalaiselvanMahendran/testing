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
        // post-create
        .state('post-create', {
            url: '/post/create',
            templateUrl: '/server/partials/post/form.html',
            controller: 'postController'
        })
        // category
        .state('category', {
            url: '/category',
            templateUrl: '/server/partials/category.html',
            controller: 'categoryController'
        })
        // user
        .state('user', {
            url: '/user',
            templateUrl: '/server/partials/user.html',
            controller: 'userController'
        });

});
