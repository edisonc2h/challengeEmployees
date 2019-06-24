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

  $scope.delete_employee = function(employee){
    console.log(employee)
    Swal.fire({
    title: 'Eliminar?',
    text: "Confirmar accion!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar!'
  }).then((result) => {
    if (result.value) {

      var params ={
      url_params: {
        id: employee.id
      }
    }
    employees_model.remove('remove_employee', params)
    .then(function(res) {
      console.log(res)
      if(res.status == 200){
        Swal.fire(
          'Eliminado!',
          'Empleado eliminado.',
          'success'
        )
        $route.reload();
      }  else {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Algo Salio Mal!',
            footer: 'Hubo un error al guardar al empleado'
          })
        }
      });

    }
  })
  }
	
  });
