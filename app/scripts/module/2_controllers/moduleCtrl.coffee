ng.module 'module.controllers'
	.controller 'mainCtrl', ['$scope', ($scope)->

		$scope.items = [0..5]

	]