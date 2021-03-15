import React from 'react'

export default function Member(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your member&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.fullname}</h2>
      <p>Email: {details.email}</p>
      <p>Location: {details.location}</p>
      <p>Position: {details.position}</p>
    </div>
  )
}
