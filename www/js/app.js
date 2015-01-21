// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('JusticeApp', ['ionic', 'JusticeApp.controllers', 'JusticeApp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
    url: "/home",
    controller:'HomeCtrl',
    templateUrl: "templates/home.html"
  }).state('badmansearch', {
    url: "/badmansearch",
    controller:'HomeCtrl',
    templateUrl: "templates/badmansearch.html"
  }).state('workplacerights', {
    url: "/workplacerights",
    controller:'HomeCtrl',
    templateUrl: "templates/workplacerights.html"
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
