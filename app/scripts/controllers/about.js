'use strict';

/**
 * @ngdoc function
 * @name editorAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the editorAngularApp
 */
angular.module('editorAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
