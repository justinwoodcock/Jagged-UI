JaggedUI.controller('JaggedNavController', ['$scope', '$attrs', function($scope, $attrs) {
	
	var path = $attrs.path;

	var handleSuccess = function(data) {
		$scope.items = data;
	}

	//MenuItems.getItems(path).success(handleSuccess);

	$scope.items = [
		{
			"icon": "fa-bullhorn",
			"text": "Campaigns",
			"url": "#",
			"children": [
				{
					"text": "Campaign Item",
					"url": "#"
				},
				{
					"text": "Campaign Item",
					"url": "#"
				},
				{
					"text": "Campaign Item",
					"url": "#"
				}
			]
		},
		{
			"icon": "fa-tachometer",
			"text": "Dashboard",
			"url": "#",
			"children": [
				{
					"text": "Dashboard Item",
					"url": "#"
				},
				{
					"text": "Dashboard Item",
					"url": "#"
				},
				{
					"text": "Dashboard Item",
					"url": "#"
				},
				{
					"text": "Dashboard Item",
					"url": "#"
				},
				{
					"text": "Dashboard Item",
					"url": "#"
				}
			]
		},
		{
			"icon": "fa-flask",
			"text": "Lab",
			"url": "#",
			"children": [
				{
					"text": "Lab Item",
					"url": "#"
				},
				{
					"text": "Lab Item",
					"url": "#"
				}
			]
		},
		{
			"icon": "fa-cogs",
			"text": "Settings",
			"url": "#",
			"children": [
				{
					"text": "Settings Item",
					"url": "#"
				},
				{
					"text": "Settings Item",
					"url": "#"
				},
				{
					"text": "Settings Item",
					"url": "#"
				}
			]
		}
	];

}]);

JaggedUI.directive('jaggedNav', [function() {

	return {
		restrict: 'A',
		replace: true,
		link: function($scope, element, attrs) {

			/*$scope.menu = {
				show: false,
				showChildren: false,
				firstTime: true
			};

			$scope.showChildren = function($event){

				var $menuItem = $($event.currentTarget);

				$menuItem.addClass('showChildren');
				
			};

			$scope.hideChildren = function($event){
				
				var $menuItem = $($event.currentTarget);

				$menuItem.removeClass('showChildren');

			};*/

		},
		templateUrl: 'templates/nav.template.jagged.html'
	};

}]);