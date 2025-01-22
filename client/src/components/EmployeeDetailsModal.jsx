import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Modal,
  Box,
  Typography,
  Paper,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { Person as PersonIcon, Close as CloseIcon } from '@mui/icons-material';
import { AccountCircle, Work, MonetizationOn } from '@mui/icons-material';

const EmployeeDetailsModal = ({ open, onClose, empId }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    if (open && empId) {
      axios.get(`/api/employees/${empId}`).then((response) => setEmployee(response.data));
    }
  }, [empId, open]);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 3,
    outline: 'none',
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="employee-details-modal">
      <Box sx={style}>
        <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', position: 'relative' }}>
          {/* Close Button */}
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8 }}
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          {/* Header Icon */}
          <PersonIcon sx={{ fontSize: 50, color: 'primary.main', marginBottom: 1 }} />
          <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
            Employee Details
          </Typography>

          {/* Employee Details */}
          {employee ? (
            <>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <AccountCircle sx={{ marginRight: 1, color: 'text.secondary' }} />
                <strong>ID:</strong>&nbsp;{employee.empId}
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <AccountCircle sx={{ marginRight: 1, color: 'text.secondary' }} />
                <strong>Name:</strong>&nbsp;{employee.name}
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Work sx={{ marginRight: 1, color: 'text.secondary' }} />
                <strong>Position:</strong>&nbsp;{employee.position}
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <MonetizationOn sx={{ marginRight: 1, color: 'text.secondary' }} />
                <strong>Salary:</strong>&nbsp;${employee.salary}
              </Typography>
            </>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 150 }}>
              <CircularProgress />
            </Box>
          )}
        </Paper>
      </Box>
    </Modal>
  );
};

export default EmployeeDetailsModal;
