ng.module('uiDropkick.directives')
	.directive 'ngDropkick', ['dropkick',(model) ->

		preLink = (scope, elem, attrs, ctrl) ->

			elem.addClass 'hideSelect'

			$select = elem

			$options = $select.find 'option'

			console.log elem.find 'option'	

		postLink = (scope, elem, attrs, ctrl) ->

			elem.addClass 'hideSelect'

			$select = angular.element elem

			$options = $select.find 'option'

			console.log elem.find 'option'

		dropkick = {

			restrict : 'A'
			scope : true
			controller : 'dropkickCtrl'
			compile : ->
				
				return {
					pre : preLink,
					post : postLink
				}
				
		}

		dropkick

	]