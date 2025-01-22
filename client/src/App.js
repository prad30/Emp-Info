import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddEmployeePage from './pages/AddEmployeePage';
// import EditEmployeePage from './pages/EditEmployeePage';
// import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import EmployeeDetailsModal from './components/EmployeeDetailsModal';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-employee" element={<AddEmployeePage />} />
        {/* <Route path="/edit-employee/:empId" element={<EditEmployeePage />} /> */}
        {/* <Route path="/employee-details/:empId" element={<EmployeeDetailsModal />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
