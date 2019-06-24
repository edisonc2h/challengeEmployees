angular.module("App")
  .controller("list", function($scope, $route, $location, employees_model) {
	$scope.employees = [];
    employees_model.get('list')
    .then(function(res) {
      	$scope.employees = res.data;
      });

    $scope.ingresar = function(){
		$location.path('/new_employee');
	}
	
  });
