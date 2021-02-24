import React from 'react';

export default function Form(props) {
    const { details } = props
    const {memberToEdit} = props;
    const onChange = evt => {
        memberToEdit(details.username, details.email, details.role)
    }
    if (!details) {
        return <h3>Working fetching your Team&apos;s details...</h3>
    }
  
    return (
    <div className='friend container'>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
        <button onClick={onChange}>EDIT</button>
    </div>
    )
  }
  