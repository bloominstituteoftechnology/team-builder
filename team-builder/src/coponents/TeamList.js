import React from 'react'

export default function TeamList({ member }) {

    console.log(member)
    
    
    return (
        <div>
            <h3> {member.fname} </h3>
            <h4> {member.lname} </h4>
            <p> `{member.fname} play {member.position} and is currently {member.status}` </p>

            
            
            
        </div>
    )
}
