'use strict';

/**
 * @ngdoc overview
 * @name pedasPageApp
 * @description
 * # pedasPageApp
 *
 * Main module of the application.
 */
angular
  .module('pedasPageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'feeds'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });