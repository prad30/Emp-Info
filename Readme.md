# Employee Management System

A comprehensive Employee Management System built with a React frontend, Node.js backend, and MongoDB for data storage. This application allows for efficient employee management with features such as adding, editing, viewing, and deleting employee records.

---

## 🚀 Project Overview

This system provides a user-friendly interface for managing employee details. It includes functionality to perform CRUD (Create, Read, Update, Delete) operations through an intuitive frontend and robust API endpoints.

The key features include:
- Modern frontend built with React and styled using Tailwind CSS.
- Backend API developed with Node.js and Express.js.
- Database operations handled with MongoDB.
- Testing capabilities for API endpoints.
- Responsive and intuitive design for seamless user experience.

---

## 🛠️ Installation Instructions

Follow these steps to set up the project on your local machine:

### Prerequisites:
- Node.js (v16 or higher)
- MongoDB (installed and running locally or via a cloud service)
- A terminal or command prompt

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/employee-management-system.git
   cd employee-management-system
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Navigate to the client directory and install dependencies:
   ```bash
   cd client
   npm install
   ```

4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

5. Start the development server:
   - For the backend:
     ```bash
     npm run dev
     ```
   - For the frontend:
     ```bash
     cd client
     npm start
     ```

6. Access the application:
   - Open your browser and navigate to `http://localhost:3000` for the frontend.
   - The backend API runs at `http://localhost:5000`.

---

## 📘 Usage

1. Start the servers as mentioned in the installation steps.
2. Open the application in your browser.
3. Use the interface to:
   - Add new employees.
   - Edit existing employee details.
   - View the list of employees.
   - Delete employees.

---

## 🌐 API Endpoints

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| GET    | `/api/employees`    | Fetch all employees.      |
| GET    | `/api/employees/:id`| Fetch employee by ID.     |
| POST   | `/api/employees`    | Add a new employee.       |
| PUT    | `/api/employees/:id`| Update employee details.  |
| DELETE | `/api/employees/:id`| Delete an employee.       |

For more details, refer to the `routes/employeeRoutes.js` file.

---

## 🧢 Testing Instructions

To test the API endpoints using `.rest` or `.http` files:
1. Install an API testing extension in your code editor (e.g., REST Client for VS Code).
2. Open the `.rest` or `.http` file.
3. Send requests to test the endpoints directly within the editor.

To run unit tests (if any are configured):
```bash
npm test
```

---

## 🤝 Contributions

Feel free to fork this repository and contribute. Pull requests are always welcome! For significant changes, please open an issue first to discuss what you would like to change.

---

