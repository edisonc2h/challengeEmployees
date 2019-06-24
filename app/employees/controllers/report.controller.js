angular.module("App")
  .controller("report", function($scope, $route, $location, employees_model) {
    employees_model.get('list')
    .then(function(res) {
      console.log(res)
      });
  });
