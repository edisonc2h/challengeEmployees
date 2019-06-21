angular.module("App")
  .controller("employees", function($scope, $route, $location, employees_model) {
    employees_model.get('list')
    .then(function(res) {
      console.log(res)
      });
  })
  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "./app/employees/views/list.html",
        controller: "employees",
      });
  });
