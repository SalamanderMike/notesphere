Crtl = angular.module('Controllers', []);

Crtl.controller('AppController', ['$scope', '$rootScope', '$http', '$timeout', function ($scope, $rootScope, $http, $timeout) {
	var app = this;
	var location,
		mapOptions,
		marker,
		map;
	$scope.focusFocus = false;
	$scope.toggle = true;
	$scope.views = {
		NOTES: 		true,
		SETTINGS: 	false
	};


// SECTION: NAV-TABS
	app.tabFunction = function(tab) {
		views = $scope.views;
		angular.forEach(Object.keys(views), function(page) {
			if (tab != page) {
				views[page] = false;
			} else {
				views[page] = true;
			};
		});
		if (tab === "APIS") app.refreshMaps();
		$scope.views = views;
	};



// TEST AREA (HARD HAT REQUIRED)


// END OF TEST AREA




// SLIDING SIDE MENU
	$scope.leftVisible = false;
	$scope.rightVisible = false;

	app.close = function() {
		$scope.leftVisible = false;
		$scope.rightVisible = false;
	};

	app.showLeft = function(e) {
		$scope.leftVisible = true;
		e.stopPropagation();
	};

	app.showRight = function(e) {
		$scope.rightVisible = true;
		e.stopPropagation();
	};

	$rootScope.$on("documentClicked", _close);
	$rootScope.$on("escapePressed", _close);

	function _close() {
		$scope.$apply(function() {
			app.close(); 
		});
	};
}]);
