import React, {useState} from 'react';
import Form from './Form';
import List from './List';


export default ()=>{
    // setting up state for a LIST of emplyees
    const [employees, setemployees] = useState([{
        name: 'sameem hadi',
        email: 'sameemadel@gmail.com',
        role: 'full-stack developer',
    }]);

    const addEmployee = (o)=>{
setemployees([...employees, o])
    }
return (
    <div>

    <Form addEmployee={(o)=>addEmployee(o)} />


    <List employees={employees}/>

    </div>
);
}