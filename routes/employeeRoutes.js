const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Create an employee (POST /api/employees)
router.post('/', async (req, res) => {
  try {
    const { empId, name, position, salary } = req.body;
    const newEmployee = new Employee({ empId, name, position, salary });
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all employees (GET /api/employees)
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/details/uniquepositions', async (req, res) => {
  try {
    // Use aggregation to find unique positions
    const positions = await Employee.distinct('position');
    res.status(200).json(positions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get an employee by ID (GET /api/employees/:empId)
router.get('/:empId', async (req, res) => {
  try {
    const employee = await Employee.findOne({ empId: req.params.empId });
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an employee by ID (PUT /api/employees/:empId)
router.put('/:empId', async (req, res) => {
  try {
    const updatedEmployee = await Employee.findOneAndUpdate(
      { empId: req.params.empId },
      req.body,
      { new: true }
    );
    if (!updatedEmployee) return res.status(404).json({ error: 'Employee not found' });
    res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an employee by ID (DELETE /api/employees/:empId)
router.delete('/:empId', async (req, res) => {
  try {
    const deletedEmployee = await Employee.findOneAndDelete({ empId: req.params.empId });
    if (!deletedEmployee) return res.status(404).json({ error: 'Employee not found' });
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
