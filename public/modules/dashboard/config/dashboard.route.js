'use strict';


angular.module('dashboard').config(['$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider',
	function($stateProvider, $urlRouterProvider, LoadingBar) {

		$stateProvider.
		state('dashboard', {
			url: '/dashboard',
			templateUrl: 'modules/dashboard/views/home.view.html',
		});
	}
])
.run(['$rootScope', function($rootScope){

}]);

