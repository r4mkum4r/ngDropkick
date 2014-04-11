ng.module 'uiDropkick.directives'
	.controller 'dropkickCtrl', ['$scope', 'dropkick', ($scope, dropkick)->

		console.log dropkick

		$scope.local = true

	]
	.directive 'ngDropkick', ['dropkick',(model) ->

		dropkick = {

			restrict : 'A'
			controller : 'dropkickCtrl'
			compile : ->
				
				(scope, elem, attrs) ->

					console.log model

		}

		dropkick

	]