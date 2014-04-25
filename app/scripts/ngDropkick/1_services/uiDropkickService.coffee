ng.module('uiDropkick.services')
	.factory 'dropkick', ->
		class Model

			self = @

			init : (params) ->
				self.modelSettings = ng.extend(getBaseSettings(), params)

			setScope : (scope)->
				self.modelSettings.$scope = scope

			




			###
				PRIVATE METHODS
			###
			getBaseSettings = ->
				
				defaults = {
					startSpeed : 1000 
					theme  : false
					change : false
					reload : false
					data : []
					$scope : null
				}

				defaults

			@modelSettings = {}

			validData = (data) ->


		new Model
		

