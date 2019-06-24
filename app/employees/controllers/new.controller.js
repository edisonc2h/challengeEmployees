angular.module("App")
  .controller("new_employee", function($scope, $route, $location, employees_model) {
	$scope.employee = {
    names: '',
    surnames: '',
    personal_identification: '',
    id_province: '',
    birth_date: '',
    email: '',
    observation: '',
    image: '',
    start_date: '',
    position: '',
    department: '',
    id_working_province: '',
    salary: '',
    part_time: 'N',
    labor_observation: ''
  };
	$scope.provincias = [];
  employees_model.get('provincias')
  .then(function(res) {
      $scope.provincias = res.data;
    });
  
  $scope.ingresar = function(){
    var params ={
      data: {
        employee: $scope.employee
      }
    }
    employees_model.post('new_employee', params)
    .then(function(res) {
      console.log(res)
      if(res.status == 200){
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Empleado ingresado con exito',
          showConfirmButton: false,
          timer: 1500
        });
        $location.path('/list');
      } else {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Algo Salio Mal!',
          footer: 'Hubo un error al guardar al empleado'
        })
      }
      });
  }
	
  });
