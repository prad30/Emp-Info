import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployeePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    axios.post('/api/employees', data).then(() => navigate('/'));
  };

  return <EmployeeForm onSubmit={handleSubmit} />;
};

export default AddEmployeePage;
