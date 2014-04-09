ng.module 'uiDropkick.services'
	.factory 'model', ->
		###
			multilinecomments
		###
		getDropdownTemplate = ->
			dropdownTemplate = [
				'<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">',
				'<a class="dk_toggle">',
				'<span class="dk_label">{{ label }}</span>',
				'</a>',
				'<div class="dk_options">',
				'<ul class="dk_options_inner">',
				'</ul>',
				'</div>',
				'</div>'
			].join('')

			dropdownTemplate

		getOptionTemplate = ->
			optionTemplate = '<li class="{{ current }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>'

			optionTemplate

		getDropdownDefaults = ->
			
			defaults = {
				startSpeed : 1000, 
				theme  : false,
				change : false
			}

			defaults

		dropkickModel = ->

