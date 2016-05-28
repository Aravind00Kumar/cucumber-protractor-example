(function () {
    'use strict'
    angular.module('app', ['ngRoute'])
        // route configuration
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'app/views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'homeCtrl'
                })
                .when('/about', {
                    templateUrl: 'app/views/about.html',
                    controller: 'AboutController',
                    controllerAs: 'aboutCtrl'
                }).otherwise({
                    redirectTo: '/home'
                })
        }])
        .controller('HomeController', [function () {
            var vm = this;
            this.title = 'Home';
        }])
        .controller('AboutController', [function () {
            var vm = this;
            this.title = 'About';
        }]);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    })
})();