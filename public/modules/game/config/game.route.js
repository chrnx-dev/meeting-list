'use strict';


angular.module('game').config(['$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider',
	function($stateProvider, $urlRouterProvider, LoadingBar) {
		$urlRouterProvider.otherwise('/');


		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/game/views/home.view.html',
		}).
		state('about', {
			url: '/about',
			templateUrl: 'modules/game/views/acerca.view.html',
		});
	}
])
.run(['$rootScope', function($rootScope){

}]);

