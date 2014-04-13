ng.module('uiDropkick.directives')
	.directive 'ngDropkick', ['dropkick',(model) ->

		dropkick = {

			restrict : 'A'
			scope : true
			controller : 'dropkickCtrl'
			compile : ->
				
				(scope, elem, attrs, ctrl) ->

		}

		dropkick

	]