import React from 'react'

export default function Team(props) {
  const { details } = props

  return (
    <div className='Team container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}
