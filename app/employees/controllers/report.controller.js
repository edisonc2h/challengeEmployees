angular.module("App")
  .controller("report", function($scope, $route, $location, employees_model) {
    $scope.employees = [];
    employees_model.get('list')
    .then(function(res) {
      $scope.employees = res.data;
      });
  });
