<?php
class Provinces_model extends CI_Model {

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function get_provinces()
    {
        $this->db->limit(10);
        $query = $this->db->get('province');
        return $query->result_array();
    }
}
?>