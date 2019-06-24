angular.module("App")
  .controller("list", function($scope, $route, $location, employees_model) {
  $scope.employees = [];
  $scope.buscar_info = {
    names: '',
    identification: ''
  }
    employees_model.get('list')
    .then(function(res) {
      	$scope.employees = res.data;
      });

    $scope.ingresar = function(){
      $location.path('/new_employee');
    }

    $scope.edit_employee = function(employee){
      $location.path('/edit_employee/' + employee.id);
    }
  
  $scope.buscar = function(){
    var params ={
      data: {
        buscar: $scope.buscar_info
      }
    }
    employees_model.post('find_employee', params)
    .then(function(res) {
      if(res.status == 200){
        $scope.employees = [];
        $scope.employees = res.data
        $scope.buscar_info = {
          names: '',
          identification: ''
        }
      }
      });
  }
	
  });
