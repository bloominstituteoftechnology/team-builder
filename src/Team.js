import React from 'react'

export default function Team(props) {
  const { details } = props

  if (!details) {
    return <h3>Loading your team now&apos;s details...</h3>
  }

  return (
    <div className='team container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}
