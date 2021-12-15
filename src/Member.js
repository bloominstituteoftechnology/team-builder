import React from 'react'

export default function Member(props) {
    const { name, email, role } = props

    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{role}</p>
        </div>
    )
}