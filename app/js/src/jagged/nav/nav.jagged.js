JaggedUI.factory('NavItems', ['$http', function($http) {
	return {
		getItems: function(path) {

			// Ajax GET request to return JSON menu items.
			return $http.get(path);

		}
	}
}]);

JaggedUI.controller('JaggedNavController', ['$scope', '$attrs', 'NavItems', function($scope, $attrs, NavItems) {
	
	var path = $attrs.items;

	console.log(path);

	var handleSuccess = function(data) {
		$scope.items = data;
	}

	NavItems.getItems(path).success(handleSuccess);

	$scope.navControl = function(event) {
		$scope.navOpen = !$scope.navOpen;

		var mainView = angular.element(document.querySelector('.mainView'));
		mainView.toggleClass('push');
	}

}]);

JaggedUI.directive('jaggedNav', [function() {

	return {
		restrict: 'A',
		replace: true,
		link: function($scope, element, attrs) {},
		templateUrl: 'templates/nav.template.jagged.html'
	};

}]);