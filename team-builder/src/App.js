import React, { useState } from 'react';
import './App.css';

import EmployeeForm from './components/EmployeeForm';
import EmployeeCard from './components/EmployeeCard'

function App() {

  const [employee, setEmployee] = useState([
    {
      id: 1,
      name: "Blake Davis",
      email: "blake-davis@lambdastudents.com",
      role: "Student"
    }
  ])

  const addEmployee = person => {
    const newEmployee = {
      id: employee.length + 1,
      name: person.name,
      email: person.email,
      role: person.role,
    };
    setEmployee([...employee, newEmployee])
  };

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeCard employee={employee} />
    </div>
  );
}

export default App;
