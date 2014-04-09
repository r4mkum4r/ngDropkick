app = window.app or {}

'use strict'

ng = angular

ng.module('module.services', [])
ng.module('module.controllers', [])
ng.module('module.directives', [])
ng.module('module.filters', [])

ng.module('ngDropkickApp', [

	'module.services',
	'module.controllers',
	'module.directives',
	'module.filters',
	'ng-dropkick'

])

