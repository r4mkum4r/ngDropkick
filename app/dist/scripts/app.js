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


// Generated by CoffeeScript 1.6.3
ng.module('module.controllers').controller('mainCtrl', [
  '$scope', 'dropkick', function($scope, dropkick) {
    $scope.items = [0, 1, 2, 3, 4, 5];
    return dropkick.init({
      data: $scope.items,
      change: function() {
        return console.log('change');
      },
      reload: function() {
        return console.log('reload');
      }
    });
  }
]);

// Generated by CoffeeScript 1.7.1
ng.module('uiDropkick.services', []);

ng.module('uiDropkick.controllers', []);

ng.module('uiDropkick.directives', []);

ng.module('uiDropkick.filters', []);

ng.module('uiDropkick', ['uiDropkick.services', 'uiDropkick.controllers', 'uiDropkick.directives', 'uiDropkick.filters']);

// Generated by CoffeeScript 1.6.3
ng.module('uiDropkick.services').factory('dropkick', function() {
  var Model;
  Model = (function() {
    var getBaseSettings, self, validData;

    function Model() {}

    self = Model;

    Model.prototype.init = function(params) {
      return self.modelSettings = ng.extend(getBaseSettings(), params);
    };

    Model.prototype.getParams = function() {};

    Model.prototype.getTheme = function() {};

    Model.prototype.setTheme = function() {};

    Model.prototype.setScope = function(scope) {
      return self.modelSettings.$scope = scope;
    };

    Model.prototype.reset = function() {};

    /*
    				PRIVATE METHODS
    */


    getBaseSettings = function() {
      var defaults;
      defaults = {
        startSpeed: 1000,
        theme: false,
        change: false,
        reload: false,
        data: [],
        $scope: null
      };
      return defaults;
    };

    Model.modelSettings = {};

    validData = function(data) {};

    return Model;

  })();
  return new Model;
});

// Generated by CoffeeScript 1.6.3
ng.module('uiDropkick.controllers').controller('dropkickCtrl', [
  '$scope', 'dropkick', function($scope, model) {
    var DropkickCtrl;
    $scope.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    model.setScope($scope);
    DropkickCtrl = (function() {
      function DropkickCtrl() {}

      DropkickCtrl.prototype.getDropdownTemplate = function() {
        var dropdownTemplate;
        dropdownTemplate = ['<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">', '<a class="dk_toggle">', '<span class="dk_label">{{ label }}</span>', '</a>', '<div class="dk_options">', '<ul class="dk_options_inner">', '</ul>', '</div>', '</div>'].join('');
        return dropdownTemplate;
      };

      DropkickCtrl.prototype.getOptionTemplate = function() {
        var optionTemplate;
        optionTemplate = '<li class="{{ current }} {{ class}}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>';
        return optionTemplate;
      };

      DropkickCtrl.prototype.setData = function() {
        return $scope.data = model.getData();
      };

      DropkickCtrl.prototype.getData = function() {
        return $scope.data;
      };

      DropkickCtrl.prototype.build = function() {
        var dropkick;
        dropkick = '';
        return dropkick;
      };

      DropkickCtrl;

      return DropkickCtrl;

    })();
    return new DropkickCtrl;
  }
]);

// Generated by CoffeeScript 1.6.3
ng.module('uiDropkick.directives').directive('ngDropkick', [
  'dropkick', function(model) {
    var dropkick;
    dropkick = {
      restrict: 'A',
      scope: true,
      controller: 'dropkickCtrl',
      compile: function() {
        return function(scope, elem, attrs, ctrl) {};
      }
    };
    return dropkick;
  }
]);

// Generated by CoffeeScript 1.7.1

