import React from 'react'

export default function Member(props) {
    return (
        <div>
            <h2>{props.details.username}</h2>
            <p>Email: {props.details.email}</p>
            <p>Role: {props.details.role}</p>
        </div>
    )
}