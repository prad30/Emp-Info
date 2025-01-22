import React, { useState, useEffect } from 'react';
import EmployeeList from '../components/EmployeeList';
import axios from 'axios';

const HomePage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('/api/employees').then((response) => setEmployees(response.data));
  }, []);

  const handleDelete = (empId) => {
    axios.delete(`/api/employees/${empId}`).then(() => {
      setEmployees(employees.filter((emp) => emp.empId !== empId));
    });
  };

  return <EmployeeList employees={employees} onDelete={handleDelete} />;
};

export default HomePage;
