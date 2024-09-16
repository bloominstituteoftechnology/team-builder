import React from 'react'

export default function Teammate (props) {

    const { details } = props

    return (
        <div>
            <h2> { details.name } </h2>
            <p> { details.role } </p>
            <p> { details.email } </p>
        </div>
    )
}