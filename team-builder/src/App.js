import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

import EmployeeForm from './components/EmployeeForm';
import EmployeeCard from './components/EmployeeCard';
import TopNavBar from './components/TopNavBar';

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
      <TopNavBar />
      <Grid container display="flex" direction="column" align="center">
        
      <EmployeeForm addEmployee={addEmployee} />
      
      <EmployeeCard employee={employee} />
      
      </Grid>
    </div>
  );
}

export default App;
