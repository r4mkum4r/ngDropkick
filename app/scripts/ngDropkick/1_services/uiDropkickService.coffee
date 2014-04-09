ng.module 'uiDropkick.services'
	.factory 'dropkickModel', ->
		class Model

			constructor : ->
				console.log 'constructor'
			

			getDropdownDefaults = ->
				
				defaults = {
					startSpeed : 1000, 
					theme  : false,
					change : false
				}

				defaults

		new Model
		

