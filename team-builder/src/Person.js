import React from 'react'

export default function Person(props) {
    const { details } = props

    if (!details) {
        return <h3>Working fetching &apos;s details...</h3>
    }

    return (
        <div className='person container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}
