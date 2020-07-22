import React from 'react'

export default function team(props){
    const { member, setMemberToEdit } = props
    return(
        <div className='team-container'>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
    <button onClick={() => setMemberToEdit(props.member)}>Edit</button>
        </div>

    )
}