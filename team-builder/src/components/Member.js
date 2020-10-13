import React from 'react'

export default function Member(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your member details...</h3>
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}