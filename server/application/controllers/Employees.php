<?php
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';

class Employees extends REST_Controller {
	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Employees_model');
		$this->load->helper('url_helper');
	}

	public function list_get()
	{
		$this->load->model('Status_model');
		$empleados = $this->Employees_model->get_empleados();
		$listado = array();
		foreach ($empleados as $key => $empleado) {
			$status = $this->Status_model->get_status($empleado['status']);
			$empleado['name_status'] = $status['description'];
			$listado[] = $empleado;
		}
		$this->response($listado, REST_Controller::HTTP_OK);
	}

	public function provincias_get()
	{
		$this->load->model('Provinces_model');
		$list = $this->Provinces_model->get_provinces();
		$this->response($list, REST_Controller::HTTP_OK);
	}

	public function new_employee_post()
	{
		$data = $this->post();
		$data_employee = $data['data']['employee'];
		$result =  $this->Employees_model->insert_new($data_employee);
		$this->response($result, REST_Controller::HTTP_OK);
	}

	public function find_employee_post()
	{
		$this->load->model('Status_model');
		$data = $this->post();
		$buscar = $data['data']['buscar'];
		$empleados = $this->Employees_model->find($buscar);
		$listado = array();
		foreach ($empleados as $key => $empleado) {
			$status = $this->Status_model->get_status($empleado['status']);
			$empleado['name_status'] = $status['description'];
			$listado[] = $empleado;
		}
		$this->response($listado, REST_Controller::HTTP_OK);
	}

	public function employee_by_id_post()
	{
		$data = $this->post();
		$id = $data['data']['id'];
		$employee = $this->Employees_model->employee_by_id($id);
		$this->response($employee, REST_Controller::HTTP_OK);
	}

	public function edit_employee_post()
	{
		$data = $this->post();
		$data_employee = $data['data']['employee'];
		$result = $this->Employees_model->edit_employee($data_employee);
		$this->response($result, REST_Controller::HTTP_OK);
	}
	
	public function remove_employee_delete($id)
	{
		$result = $this->Employees_model->remove_employee($id);
		$this->response($result, REST_Controller::HTTP_OK);
	}

	public function validar_identificacion_get($cedula)
	{
		$result = $this->Employees_model->validar_identificacion($cedula);
		$this->response($result, REST_Controller::HTTP_OK);
	}
}
