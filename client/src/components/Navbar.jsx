import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Home as HomeIcon, PersonAdd as PersonAddIcon } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(45deg, #3f51b5, #2196f3)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
          Employee Management
        </Typography>
        <IconButton
          color="inherit"
          component={NavLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: 2,
            '&:hover': { color: '#fff', backgroundColor: '#1976d2' },
          }}
        >
          <HomeIcon sx={{ marginRight: 1 }} />
          Home
        </IconButton>
        <IconButton
          color="inherit"
          component={NavLink}
          to="/add-employee"
          sx={{
            display: 'flex',
            alignItems: 'center',
            '&:hover': { color: '#fff', backgroundColor: '#1976d2' },
          }}
        >
          <PersonAddIcon sx={{ marginRight: 1 }} />
          Add Employee
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
