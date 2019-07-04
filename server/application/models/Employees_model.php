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

    public function find($data)
    {
        $this->db->limit(10);
        if ($data['names'] && $data['names'] !== '')
            $query = $this->db->like('names', $data['names']);
        if ($data['identification'] && $data['identification'] !== '')
            $query = $this->db->like('personal_identification', $data['identification']);
        $query = $this->db->get('employees');
        return $query->result_array();
    }

    public function insert_new($employee)
    {
        $data = array(
            'personal_identification' => $employee['personal_identification'],
            'names'         => $employee['names'],
            'surnames'      => $employee['surnames'],
            'id_province'   => $employee['id_province'],
            'birth_date'    => $employee['birth_date'],
            'email'         => $employee['email'],
            'observation'   => $employee['observation'],
            'image'         => $employee['image'],
            'start_date'    => $employee['start_date'],
            'position'      => $employee['position'],
            'department'    => $employee['department'],
            'id_working_province' => $employee['id_working_province'],
            'salary'        => $employee['salary'],
            'part_time'     => $employee['part_time'],
            'labor_observation' => $employee['labor_observation'],
            'registration_date' => date('Y-m-d H:i:s')
        );

        return $this->db->insert('employees', $data);
    }

    public function employee_by_id($id)
    {
        $query = $this->db->where('id', $id);
        $query = $this->db->get('employees');
        $data =  $query->result_array();
        if (sizeof($data) > 0){
            return $data[0];
        }
        return array();
    }

    public function edit_employee($employee)
    {
        $data = array(
            'personal_identification' => $employee['personal_identification'],
            'names'         => $employee['names'],
            'surnames'      => $employee['surnames'],
            'id_province'   => $employee['id_province'],
            'birth_date'    => $employee['birth_date'],
            'email'         => $employee['email'],
            'observation'   => $employee['observation'],
            'personal_identification' => $employee['personal_identification'],
            'names'         => $employee['names'],
            'surnames'      => $employee['surnames'],
            'id_province'   => $employee['id_province'],
            'birth_date'    => $employee['birth_date'],
            'email'         => $employee['email'],
            'observation'   => $employee['observation'],
            'image'         => $employee['image'],
            'start_date'    => $employee['start_date'],
            'position'      => $employee['position'],
            'department'    => $employee['department'],
            'id_working_province' => $employee['id_working_province'],
            'salary'        => $employee['salary'],
            'part_time'     => $employee['part_time'],
            'labor_observation' => $employee['labor_observation'],
            'image'         => $employee['image'],
            'start_date'    => $employee['start_date'],
            'position'      => $employee['position'],
            'department'    => $employee['department'],
            'id_working_province' => $employee['id_working_province'],
            'salary'        => $employee['salary'],
            'part_time'     => $employee['part_time'],
            'labor_observation' => $employee['labor_observation']
        );
        $this->db->where('id', $employee['id']);
        return $this->db->update('employees', $data);
    }

    public function remove_employee($id)
    {
        $this->db->where('id', $id);
        $result = $this->db->delete('employees');
        return $result;
    }

    public function validar_identificacion($identificacion)
    {
        $query = $this->db->select('personal_identification');
        $query = $this->db->where('personal_identification', $identificacion);
        $query = $this->db->get('employees');
        $data =  $query->row_array();
        if (sizeof($data) > 0){
            return true;
        }
        return false;
    }

    
}
?>