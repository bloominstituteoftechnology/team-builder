import React from 'react'

export default function Member(props) {
    const { details } = props

    if (!details) {
        return <h3>Fetching your team's details...</h3>
    }
    return (
        <div className='member container'>
          <h2>Name: {details.name}</h2>
          <p>Email: {details.email}</p>
          <p>Role: {details.role}</p>
        </div>
      )
}