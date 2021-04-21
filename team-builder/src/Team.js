import React from 'react';

export default function Team(props) {
    const { details} = props;
    
    const edit = evt => {
        props.memberToEdit(details);

        }
       

    if (!details) {
        return <h3>Working fetching your Team&apos;s details...</h3>
    }
  
    return (
    <div className='friend container'>
        <h3>{details.username}</h3>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
        <button onClick={edit}>EDIT</button>
    </div>
    )
  }
  