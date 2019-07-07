'use strict';

angular.module('Directives').directive('isEmail', function(validator_utils) {

  return {
    restrict: 'A',
    require: 'ngModel',
    priority: 0,
    link: function(scope, element, attrs, input_model) {

      scope.$watch(attrs.ngModel, function() {
          validate_email() 
      });

      function validate_email() {
        var error_key = 'invalid_email';
        var is_valid = true;
        input_model.$setValidity(error_key, is_valid);
        var value = element.val();
          if (/\S/.test(value)) {
            is_valid = validator_utils.validarEmail(value);
            input_model.$setValidity(error_key, is_valid);
          }
        if (!scope.$$phase) {
          scope.$digest();
        }
      }
      
    }
  };
});
