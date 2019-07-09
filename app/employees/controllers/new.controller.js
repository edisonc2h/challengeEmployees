angular.module("App")
  .controller("new_employee", function($scope, $route, $location, employees_model, BackendConfig, fileUpload) {
	$scope.employee = {
    names: '',
    surnames: '',
    personal_identification: '',
    id_province: '',
    birth_date: '',
    email: '',
    observation: '',
    image: '',
    start_date: ,
    position: '',
    department: '',
    id_working_province: '',
    salary: '',
    part_time: 'N',
    labor_observation: ''
  };
	$scope.provincias = [];
  $scope.file_model = {
        value: ''
      }
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
    employees_model.post('new_employee', params)
    .then(function(res) {
      if(res.status == 200){
        if (file_name !== '') {
            var upload_url = `${BackendConfig.url}/Employees/guardar_archivo`;
            fileUpload.upload_file_To_url(file, upload_url);
          }
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

  function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          $('#file')
            .attr('src', e.target.result)
            .width(150)
            .height(200);
        };

        reader.readAsDataURL(input.files[0]);
      }
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
