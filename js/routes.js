angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('snapchat', {
    url: '/page1',
    templateUrl: 'templates/snapchat.html',
    controller: 'snapchatCtrl'
  })

  .state('carloCortez', {
    url: '/page3',
    templateUrl: 'templates/carloCortez.html',
    controller: 'carloCortezCtrl'
  })

  .state('sarahAbdeen', {
    url: '/page4',
    templateUrl: 'templates/sarahAbdeen.html',
    controller: 'sarahAbdeenCtrl'
  })

  .state('samTongol', {
    url: '/page5',
    templateUrl: 'templates/samTongol.html',
    controller: 'samTongolCtrl'
  })

  .state('sherinaPena', {
    url: '/page6',
    templateUrl: 'templates/sherinaPena.html',
    controller: 'sherinaPenaCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});