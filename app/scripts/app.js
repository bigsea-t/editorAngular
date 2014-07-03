'use strict';

/**
 * @ngdoc overview
 * @name editorAngularApp
 * @description
 * # editorAngularApp
 *
 * Main module of the application.
 */
angular
  .module('editorAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/editor', {
        templateUrl: 'views/editor.html',
        controller: 'EditorCtrl'
      })
      .otherwise({
        redirectTo: '/editor'
      });
  });
