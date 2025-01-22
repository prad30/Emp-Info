import React, { useState } from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // For adding animations

const EmployeeForm = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues || { empId: '', name: '', position: '', salary: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, width: '100%', borderRadius: 2 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
          {initialValues ? 'Edit Employee' : 'Add Employee'}
        </Typography>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <TextField
              name="empId"
              label="Employee ID"
              value={formData.empId}
              onChange={handleChange}
              required
              disabled={!!initialValues}
              fullWidth
              sx={{ '& .MuiInputBase-root': { borderRadius: '4px' }, marginBottom: 2 }}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              sx={{ '& .MuiInputBase-root': { borderRadius: '4px' }, marginBottom: 2 }}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <TextField
              name="position"
              label="Position"
              value={formData.position}
              onChange={handleChange}
              required
              fullWidth
              sx={{ '& .MuiInputBase-root': { borderRadius: '4px' }, marginBottom: 2 }}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <TextField
              name="salary"
              label="Salary"
              value={formData.salary}
              onChange={handleChange}
              type="number"
              required
              fullWidth
              sx={{ '& .MuiInputBase-root': { borderRadius: '4px' }, marginBottom: 2 }}
            />
          </motion.div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2, borderRadius: '20px', boxShadow: 2 }}
          >
            Submit
          </Button>
        </motion.form>
      </Paper>
    </Box>
  );
};

export default EmployeeForm;
