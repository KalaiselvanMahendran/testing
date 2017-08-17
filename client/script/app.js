var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // home
        .state('home', {
            url: '/',
            templateUrl: '/client/partials/home.html',
            controller: 'homeController'
        })

        // about
        .state('about', {
            url: '/about',
            templateUrl: '/client/partials/about.html',
            controller: 'aboutController'
        })

        // post
        .state('post', {
            url: '/post',
            templateUrl: '/client/partials/post.html',
            controller: 'postController'
        })

        // contact
        .state('contact', {
            url: '/contact',
            templateUrl: '/client/partials/contact.html',
            controller: 'contactController'
        });

});
