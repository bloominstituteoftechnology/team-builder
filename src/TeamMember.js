import React from 'react'

export default function TeamMember(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your TeamMember&apos;s details...</h3>
  }

  return (
    <div className='TeamMember container'>
      <h2>Username: {details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}
