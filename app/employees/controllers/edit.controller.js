angular.module("App")
  .controller("edit", function($scope, $route, $location, employees_model) {
    console.log($route.current.params)
    $scope.employee = [];
    var params = {
        data: {
            id: $route.current.params._id
        }
    }
    employees_model.post('employee_by_id', params)
    .then(function(res) {
          $scope.employee = res.data;
          $scope.employee.salary = parseFloat($scope.employee.salary);
          var birth_date = moment($scope.employee.birth_date).format('DD-MM-YYYY');
          $scope.employee.birth_date = new Date(birth_date);
          var start_date = moment($scope.employee.start_date).format('DD-MM-YYYY');
          $scope.employee.start_date = new Date(start_date);
    });

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
        employees_model.post('edit_employee', params)
        .then(function(res) {
          console.log(res)
          if(res.status == 200){
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Empleado editado con exito',
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
