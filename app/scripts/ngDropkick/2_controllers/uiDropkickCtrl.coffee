ng.module('uiDropkick.controllers')
	.controller('dropkickCtrl', ['$scope', 'dropkick', ($scope, model)->

		model.setScope($scope)

		class DropkickCtrl
			getDropdownTemplate : ->
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

			getOptionTemplate : ->
				optionTemplate = '<li class="{{ current }} {{ class}}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>'

				optionTemplate

			build : ->
				dropkick = ''

				dropkick

			DropkickCtrl

		return new DropkickCtrl

	])