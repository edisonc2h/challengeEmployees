angular.module("App")
  .controller("new_employee", function($scope, $route, $location, employees_model) {
	$scope.employee = [];
	$scope.provincias = [];
    employees_model.get('provincias')
    .then(function(res) {
      	$scope.provincias = res.data;
      });
	
  });
