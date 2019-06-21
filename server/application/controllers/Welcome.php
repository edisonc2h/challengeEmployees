<?php
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';

class Welcome extends REST_Controller {
	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Employees_model');
		$this->load->helper('url_helper');
	}

	public function index_get()
	{
		$this->set_response(array('data' => "asdsadsad"), REST_Controller::HTTP_OK);
	}

	public function empleados_get()
	{
		$empleados = $this->Employees_model->get_empleados();
		$this->response($empleados, REST_Controller::HTTP_OK);
	}
}
