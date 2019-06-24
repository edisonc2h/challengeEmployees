angular.module("App")
.config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "./app/employees/views/main.html",
        controller: "employees",
      }).when("/report", {
        templateUrl: "./app/employees/views/report.html",
        controller: "report",
      }).when("/new_employee", {
        templateUrl: "./app/employees/views/new.html",
        controller: "new_employee",
      }).when("/list", {
        templateUrl: "./app/employees/views/list.html",
        controller: "list",
      }).when("/credits", {
        templateUrl: "./app/employees/views/credits.html",
        controller: "credits",
      }).when("/edit_employee/:_id", {
        templateUrl: "./app/employees/views/edit.html",
        controller: "edit"
      });
  });


  /**/