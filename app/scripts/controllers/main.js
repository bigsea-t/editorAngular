'use strict';

/**
 * @ngdoc function
 * @name editorAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the editorAngularApp
 */
angular.module('editorAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
