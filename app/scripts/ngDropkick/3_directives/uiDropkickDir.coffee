ng.module 'uiDropkick.directives'
	.directive 'ngDropkick', ->

		dropkick = {

			restrict : 'A'
			link : (scope, elem, attrs)->

				console.log(elem)

		}

		dropkick