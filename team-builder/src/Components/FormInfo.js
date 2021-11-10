import React from 'react'

export default function FormDetails (props) {
    const { details } = props

    if (!details) {
        return <h3> Loading... </h3>
    }

    return(
        <div className = 'details'>
            <h2> {details.name} </h2>
            <p> Email: {details.email} </p>
            <p> Role: {details.role} </p>
        </div>
    )
}