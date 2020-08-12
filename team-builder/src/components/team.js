import React from 'react'

export default function team(props){
    const { details } = props
    return(
        <div className ='team-container'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>

    )
}