angular.module("App")
  .controller("edit", function($scope, $route, $location, employees_model, BackendConfig, fileUpload) {
    $scope.employee = [];
    var params = {
        data: {
            id: $route.current.params._id
        }
    }
    $scope.file_model = {
        value: ''
      }
    employees_model.post('employee_by_id', params)
    .then(function(res) {
          $scope.employee = res.data;
          $scope.employee.salary = parseFloat($scope.employee.salary);
          var birth_date = moment($scope.employee.birth_date).format('MM-DD-YYYY');
          $scope.employee.birth_date = new Date(birth_date);
          var start_date = moment($scope.employee.start_date).format('MM-DD-YYYY');
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
      var file_name = '';
      if ($scope.file_model && $scope.file_model.value)  {
        var file = $scope.file_model.value;
        file_name = file.name.trim();
        file_name = file_name.replace(/ /g, '');
        $scope.employee.image = file_name;
      }
        var params ={
          data: {
            employee: $scope.employee
          }
        }
        employees_model.post('edit_employee', params)
        .then(function(res) {
          if(res.status == 200){

            if (file_name !== '') {
              var upload_url = `${BackendConfig.url}/Employees/guardar_archivo`;
              fileUpload.upload_file_To_url(file, upload_url);
            }

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

      $scope.cancelar = function(){
        $location.path('/list');
      }

  }).service('fileUpload', function($http) {

      this.upload_file_To_url = function(file, upload_url) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(upload_url, fd, {
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          })
          .then(function(response) {
            return response.data.response;
          });
      }
    });
