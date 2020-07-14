import React from 'react';

const Employees = props => {
    return(
        <div className='Employee-list'>
            {props.formData.map((data, i) => (
                <div className='Employee' key={i}>
                    <h1>{data.fname}</h1>
                    <p>{data.lname}</p>
                    <p>{data.email}</p>
                    <p>{data.role}</p>
                </div>    
            ))}

        </div>
    )
};

export default Employees;