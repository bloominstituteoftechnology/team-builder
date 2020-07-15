import React, { useState } from 'react';


const EmployeeForm = props => {
    const [employee, setEmployee] = useState({
       First:'',
       Last:'',
       email:'',
       role:'' 
    })

    const changeHandler = (event) => {
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value
        })
    }

    const SubmitForm = event => {
        event.preventDefault();
        props.addNewMember(employee)
        setEmployee({First:'', Last:'', email:'', role:''})
    }


return(
    <form 
        onSubmit={SubmitForm}
    >   
    <div> 
        <input
        id='First'
        type='text'
        name='First'
        value={employee.First}
        plaeholder='First Name' 
        onChange={changeHandler}
        />
    </div>  
    <div>
        <input
        id='Last'
        type='text'
        name='Last'
        value={employee.Last}
        plaeholder='Last Name'
        onChange={changeHandler}
        />
    </div>
    <div>
        <input
        id='email'
        type='text'
        name='email'
        value={employee.email}
        plaeholder='Email'
        onChange={changeHandler}
        />
    </div>    
    <div>
        <input 
        id='role'
        type='text'
        name='role'
        value={employee.role}
        plaeholder="Role"
        onChange={changeHandler}
        />
    </div>
        <button type="submit">Submit</button>
    </form>
    );
};

export default EmployeeForm;