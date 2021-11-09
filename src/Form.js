import React from 'react';

export default function Form(props) {
    const { details } = props

    if (!details) {
        return <h3>Working on fetching your team members</h3>
    }

    return(
        <div className='formCont'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}