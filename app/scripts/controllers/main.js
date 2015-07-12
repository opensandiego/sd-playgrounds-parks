'use strict';

/**
 * @ngdoc function
 * @name sdPlaygroundsParksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sdPlaygroundsParksApp
 */
angular.module('sdPlaygroundsParksApp')
  .controller('MainCtrl', function ($scope) {
    angular.extend($scope, {
      defaults: {
        tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        path: {
          weight: 10,
          color: '#800000',
          opacity: 1
        }
      }, // defaults
      center: {

      } // center
    })
  });
