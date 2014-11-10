'use strict';

angular.module('game').controller('DevelopersController', ['$scope',
	function($scope) {

		$scope.prob = function(){

			return Math.round(1/$scope.developers.length) || 0;
		};

		$scope.developers = [
			{
				email: 'diego.resendez@internetbrands.com',
				name: 'Diego Resendez',
				elected: false,
				p: 0.16
			},{
				email: 'mishell.sossa@internetbrands.com',
				name: 'Mishell Sossa',
				elected: false,
				p: 0.16
			},{
				email: 'alejandro.flores@internetbrands.com',
				name: 'Alejandro Flores',
				elected: false,
				p: 0.16
			},{
				email: 'david.thomas@internetbrands.com',
				name: 'David Thomas',
				elected: false,
				p: 0.16
			},{
				email: 'frank.molina@internetbrands.com',
				name: 'Frank Molina',
				elected: false,
				p: 0.16
			},{
				email: 'pauline.ku@internetbrands.com',
				name: 'Pauline Ku',
				elected: false,
				p: 0.16
			}
		];



	}
]);