import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Visibility as ViewIcon, Search as SearchIcon, FilterList as FilterListIcon } from '@mui/icons-material';
import EditEmployeePage from '../pages/EditEmployeePage';
import EmployeeDetailsModal from './EmployeeDetailsModal'; // Importing the view modal

const EmployeeList = ({ employees, onDelete, onUpdate }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedEmpId, setSelectedEmpId] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');
  const [positions, setPositions] = useState([]);

  // Fetch unique positions from the backend
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch('/api/employees/details/uniquepositions');
        const data = await response.json();
        setPositions(data); // Set fetched positions
      } catch (error) {
        console.error('Error fetching positions:', error);
      }
    };

    fetchPositions();
  }, []);

  // Open edit modal with selected employee ID
  const handleEditClick = (empId) => {
    setSelectedEmpId(empId);
    setIsEditModalOpen(true);
  };

  // Open view modal with selected employee ID
  const handleViewClick = (empId) => {
    setSelectedEmpId(empId);
    setIsViewModalOpen(true);
  };

  // Close modals
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEmpId(null);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedEmpId(null);
  };

  // Filter employees based on search and filters
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesPosition = positionFilter ? emp.position === positionFilter : true;
    const matchesSalary = salaryFilter ? emp.salary >= salaryFilter[0] && emp.salary <= salaryFilter[1] : true;

    return matchesSearch && matchesPosition && matchesSalary;
  });

  return (
    <>
      {/* Search and Filter Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 3, marginTop: 5 }}>
        <TextField
          label="Search by Name"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: '300px' }}
        />

        <FormControl sx={{ width: '200px' }}>
          <InputLabel>Position</InputLabel>
          <Select
            value={positionFilter}
            onChange={(e) => setPositionFilter(e.target.value)}
            label="Position"
            startAdornment={<FilterListIcon />}
          >
            <MenuItem value="">All Positions</MenuItem>
            {positions.map((position, index) => (
              <MenuItem key={index} value={position}>{position}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: '200px' }}>
          <InputLabel>Salary</InputLabel>
          <Select
            value={salaryFilter}
            onChange={(e) => setSalaryFilter(e.target.value)}
            label="Salary"
            startAdornment={<FilterListIcon />}
          >
            <MenuItem value="">All Salaries</MenuItem>
            <MenuItem value={[0, 5000]}>Below $5000</MenuItem>
            <MenuItem value={[5000, 10000]}>$5000 - $10000</MenuItem>
            <MenuItem value={[10000, 20000]}>$10000 - $20000</MenuItem>
            <MenuItem value={[20000, 500000000]}>Above $20000</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Table Container */}
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: 'auto', width: '80%' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((emp) => (
                <TableRow key={emp.empId}>
                  <TableCell>{emp.empId}</TableCell>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>{emp.position}</TableCell>
                  <TableCell>${emp.salary}</TableCell>
                  <TableCell align="center">
                    {/* Edit Icon */}
                    <IconButton color="primary" onClick={() => handleEditClick(emp.empId)}>
                      <EditIcon />
                    </IconButton>

                    {/* Delete Icon */}
                    <IconButton color="secondary" onClick={() => onDelete(emp.empId)}>
                      <DeleteIcon />
                    </IconButton>

                    {/* View Icon */}
                    <IconButton color="info" onClick={() => handleViewClick(emp.empId)}>
                      <ViewIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Edit Employee Modal */}
      {selectedEmpId && (
        <EditEmployeePage
          open={isEditModalOpen}
          onClose={handleCloseEditModal}
          empId={selectedEmpId}
          onUpdate={onUpdate} // Callback to refresh the list after update
        />
      )}

      {/* View Employee Modal */}
      {selectedEmpId && (
        <EmployeeDetailsModal
          open={isViewModalOpen}
          onClose={handleCloseViewModal}
          empId={selectedEmpId}
        />
      )}
    </>
  );
};

export default EmployeeList;
