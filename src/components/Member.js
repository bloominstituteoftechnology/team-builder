import React from 'react'

export default function Member(props) {
    const { member: {role, email, name} } = props;

    return (
        <li>
            <h3>Name {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Role: {role}</h3>
        </li>
    )
}
