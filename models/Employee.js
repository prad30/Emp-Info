const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  empId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
