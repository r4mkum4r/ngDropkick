// Generated by CoffeeScript 1.7.1
var app, ng;

app = window.app || {};

'use strict';

ng = angular;

ng.module('module.services', []);

ng.module('module.controllers', []);

ng.module('module.directives', []);

ng.module('module.filters', []);

ng.module('ngDropkickApp', ['module.services', 'module.controllers', 'module.directives', 'module.filters', 'uiDropkick']);

// Generated by CoffeeScript 1.7.1


// Generated by CoffeeScript 1.7.1
ng.module('module.controllers').controller('mainCtrl', [
  '$scope', function($scope) {
    return $scope.items = [0, 1, 2, 3, 4, 5];
  }
]);

// Generated by CoffeeScript 1.7.1
ng.module('uiDropkick.services', []);

ng.module('uiDropkick.controllers', []);

ng.module('uiDropkick.directives', []);

ng.module('uiDropkick.filters', []);

ng.module('uiDropkick', ['uiDropkick.services', 'uiDropkick.controllers', 'uiDropkick.directives', 'uiDropkick.filters']);

// Generated by CoffeeScript 1.7.1
ng.module('uiDropkick.services').factory('dropkickModel', function() {
  var Model;
  Model = (function() {
    var getDropdownDefaults;

    function Model() {
      console.log('constructor');
    }

    getDropdownDefaults = function() {
      var defaults;
      defaults = {
        startSpeed: 1000,
        theme: false,
        change: false
      };
      return defaults;
    };

    return Model;

  })();
  return new Model;
});

// Generated by CoffeeScript 1.7.1
ng.module('uiDropkick.controllers').controller('dropkickCtrl', [
  '$scope', function($scope) {
    return $scope.mousedown = false;
  }
]);

// Generated by CoffeeScript 1.7.1
ng.module('uiDropkick.directives').directive('ngDropkick', [
  'dropkickModel', function(model) {
    var dropkick, getDropdownTemplate, getOptionTemplate;
    getDropdownTemplate = function() {
      var dropdownTemplate;
      dropdownTemplate = ['<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">', '<a class="dk_toggle">', '<span class="dk_label">{{ label }}</span>', '</a>', '<div class="dk_options">', '<ul class="dk_options_inner">', '</ul>', '</div>', '</div>'].join('');
      return dropdownTemplate;
    };
    getOptionTemplate = function() {
      var optionTemplate;
      optionTemplate = '<li class="{{ current }} {{ class}}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>';
      return optionTemplate;
    };
    dropkick = {
      restrict: 'A',
      compile: function() {
        return console.log(model);
      }
    };
    return dropkick;
  }
]);