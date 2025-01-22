import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const steps = [
  { label: 'Edit Name', field: 'name' },
  { label: 'Edit Salary', field: 'salary' },
  { label: 'Edit Position', field: 'position' },
];

const EditEmployeePage = ({ open, onClose, empId }) => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [formData, setFormData] = useState({ name: '', salary: '', position: '' });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (open) {
      axios.get(`/api/employees/${empId}`).then((response) => {
        setEmployee(response.data);
        setFormData(response.data);
      });
    }
  }, [empId, open]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleUpdate = () => {
    axios.put(`/api/employees/${empId}`, formData).then(() => {
      navigate('/');
      onClose();
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" gutterBottom>
          Edit Employee Details
        </Typography>
        {employee ? (
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <TextField
                    label={step.label}
                    variant="outlined"
                    fullWidth
                    value={formData[step.field]}
                    onChange={(e) => handleChange(step.field, e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      onClick={index === steps.length - 1 ? handleUpdate : handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Update' : 'Next'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default EditEmployeePage;
