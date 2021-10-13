import React from 'react'


export default function Form(props) {
    const { details } = props
  
    if (!details) {
      return <h3>Working fetching your friend&apos;s details...</h3>
    }
  
    return (
      <div>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
    )
  }
  
