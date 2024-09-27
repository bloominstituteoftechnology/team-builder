import React from 'react'

export default function TeamMember(props) {
  const { details } = props

  if (!details) {
    return <h3>fetching your team details...</h3>
  }

  return (
    <div className='team container'>
      <h2>{details.fname}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}
