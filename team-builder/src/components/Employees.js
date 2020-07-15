import React from 'react';

const EmployeeList = props => {
    return(
        <div className="employee-list">
            {props.employeeData.map(data => (
                <div className='employee' key='data.id'>
                <h1>{data.First}</h1>
                <p>{data.Last}</p>
                <p>{data.email}</p>
                <p>{data.role}</p>
        </div>
            ))}
        </div>
    )
};

export default EmployeeList;