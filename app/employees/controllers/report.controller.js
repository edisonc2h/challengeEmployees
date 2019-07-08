angular.module("App")
  .controller("report", function($scope, $route, $location, employees_model, NgTableParams) {
    employees_model.get('list')
    .then(function(res) {
      	$scope.employeesTable = new NgTableParams({}, { dataset: res.data, counts: [] });
      });

  });
