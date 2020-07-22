import React from 'react'

export default function Peeps(props) {
    const { peep } = props

    if (!peep) {
        return <h3>Retrieving...</h3>
    }

    return (
        <div className='peep container'>
            <h2>{peep.username}</h2>
            <p>Herald at {peep.email}</p>
            <p>{peep.role} </p>
        </div>
    )
}