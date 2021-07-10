import React, {useState} from 'react';

export default ({employees})=>{
   
return (
    <div>
    
    {employees.map(employee=>{
        return (
            <div key={employee.email}>
            <h2>{employee.name}</h2>
            <h5>{employee.role}</h5>
            <p>{employee.email}</p>
           <form><button>edit</button></form>
            </div>
        )
    })}
</div>
)
}