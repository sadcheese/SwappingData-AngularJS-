/**
 * @author Sam
 */
var swapAng = angular.module('swapAng', []);
var controllers = {};
controllers.swapCtrl =  function($scope) {

	$scope.daft = function() {
		$scope.name = 'Daft';
		
	};
	$scope.proj = function() {
		$scope.name = 'Proje';
		
	};
	$scope.dinner = function() {
		$scope.name = 'Dinner';
		
	};
	
		$scope.data = [{
			name : "Daft Punk Party",
			image : "img/daftpunk.jpg"
		}, {
			name : "Projet X Party",
			image : "img/proj.jpg"
		}, {
			name : "Dinner Party",
			image : "img/dinner.jpg"
		}];
	

};
swapAng.controller(controllers);
