ng.module('module.controllers')
	.controller 'mainCtrl', ['$scope','dropkick', ($scope, dropkick)->

		$scope.items = [0..5]

		dropkick.init({
			data : $scope.items,
			change : ->
				console.log 'change'
			reload : ->
				console.log 'reload'
		})

	]