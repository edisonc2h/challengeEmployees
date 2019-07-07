angular.module("App")
  .controller("new_employee", function($scope, $route, $location, employees_model, BackendConfig) {
	$scope.employee = {
    names: '',
    surnames: '',
    personal_identification: '',
    id_province: '',
    birth_date: new Date(),
    email: '',
    observation: '',
    image: '',
    start_date: new Date(),
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
    $scope.employee.birth_date = moment($scope.employee.birth_date).format('YYYY-MM-DD');
    $scope.employee.start_date = moment($scope.employee.start_date).format('YYYY-MM-DD');
    var params ={
      data: {
        employee: $scope.employee
      }
    }
    employees_model.post('new_employee', params)
    .then(function(res) {
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

   $scope.validar_si_existe_identificacion = function($cedula) {
     if (!$cedula){
       return;
     }
      let url = `${BackendConfig.url}/Employees/validar_identificacion/${$cedula}`;
      return fetch(url, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          .then(function(res) {
              return res.json();
          })
          .then(function(data) {
              if (data){
                $scope.employee.personal_identification = '';
                Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'Cedula ya existe!',
                })
              }
          });
  }
	
  });
