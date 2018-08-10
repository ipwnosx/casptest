angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.moviesTV', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/moviesTV.html',
        controller: 'moviesTVCtrl'
      }
    }
  })

  .state('tabsController.sportsLiveSports', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/sportsLiveSports.html',
        controller: 'sportsLiveSportsCtrl'
      }
    }
  })

  .state('tabsController.sRLS', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/sRLS.html',
        controller: 'sRLSCtrl'
      }
    }
  })

  .state('tabsController.music', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/music.html',
        controller: 'musicCtrl'
      }
    }
  })

  .state('tabsController.videoDownloaders', {
    url: '/page7',
    views: {
      'tab6': {
        templateUrl: 'templates/videoDownloaders.html',
        controller: 'videoDownloadersCtrl'
      }
    }
  })

  .state('tabsController.vPNS', {
    url: '/page14',
    views: {
      'tab7': {
        templateUrl: 'templates/vPNS.html',
        controller: 'vPNSCtrl'
      }
    }
  })

  .state('storageCleaners', {
    url: '/page8',
    templateUrl: 'templates/storageCleaners.html',
    controller: 'storageCleanersCtrl'
  })

  .state('bonusApps', {
    url: '/page9',
    templateUrl: 'templates/bonusApps.html',
    controller: 'bonusAppsCtrl'
  })

  .state('appleID', {
    url: '/page10',
    templateUrl: 'templates/appleID.html',
    controller: 'appleIDCtrl'
  })

  .state('promotions', {
    url: '/page11',
    templateUrl: 'templates/promotions.html',
    controller: 'promotionsCtrl'
  })

  .state('youtubers', {
    url: '/page12',
    templateUrl: 'templates/youtubers.html',
    controller: 'youtubersCtrl'
  })

  .state('credits', {
    url: '/page13',
    templateUrl: 'templates/credits.html',
    controller: 'creditsCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')


});