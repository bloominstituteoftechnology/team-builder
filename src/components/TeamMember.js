import React from 'react'; 

export default function TeamMember(props) { 
    const {details} = props; 

    if(!details) { 
        return <h3>Working fetching your team memeber&apos;s details...</h3>
    }
    return(
        <div className='teamMember container'>
            <h2>{`${details.fname} ${details.lname}`}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    );
}