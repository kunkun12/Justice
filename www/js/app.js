
angular.module('JusticeApp', ['ionic', 'JusticeApp.controllers', 'JusticeApp.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
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
    controller:'badManSearchCtl',
    templateUrl: "templates/badmansearch.html"
  }).state('workplacerights', {
    url: "/workplacerights",
    controller:'HomeCtrl',
    templateUrl: "templates/workplacerights.html"
  }).state('cartoon', {
    url: "/workplacerights/cartoon",
    controller:'badManSearchCtl',
    templateUrl: "templates/right-cartoon.html"
  })
  $urlRouterProvider.otherwise('/home');
});
