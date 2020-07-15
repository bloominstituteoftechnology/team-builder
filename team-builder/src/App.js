
import React, {useState} from 'react';
import './App.css';
import EmployeeList from './components/Employees';
import EmployeeForm from './components/Form';

function App() {
const [employeeData, setEmployeeData] = useState(
  [{
    id: 1,
    First: 'Donavan',
    Last: 'Terranova',
    email: 'dterran2@outlook.com',
    role: 'ditch digger'
  }
  ]);

  const addNewMember = (data) => {
    const newMember = {
      id: Date.now(),
      First: data.First,
      Last: data.Last,
      email: data.email,
      role: data.role
    }
    setEmployeeData([...employeeData, newMember]);
    
  };

  return (

    <div className="body">
      <EmployeeForm employeeData={employeeData} addNewMember={addNewMember}/>
      <EmployeeList employeeData={employeeData}/>
    </div>
   );

}

export default App;
