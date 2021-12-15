import React from 'react'
import Member from './Member'

export default function Team(props) {
    

    return (
        props.teamMembers.map(member => {
            const {name, role, email} = member;
            return <Member name={name} email={email} role={role}   />
        })

    )


   
}