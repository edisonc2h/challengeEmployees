<?php
class Status_model extends CI_Model {

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function get_status($id)
    {
        $query = $this->db->where('id', $id);
        $query = $this->db->get('status');
        $result = $query->result_array();
        return $result[0];
    }
}
?>