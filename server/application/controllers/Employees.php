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
		$empleados = $this->Employees_model->get_empleados();
		$this->response($empleados, REST_Controller::HTTP_OK);
	}
}
