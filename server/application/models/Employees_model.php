<?php
class Employees_model extends CI_Model {

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function get_empleados()
    {
        $this->db->limit(10);
        $query = $this->db->get('employees');
        return $query->result_array();
    }
}
?>