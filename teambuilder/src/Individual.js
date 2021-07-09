import React from 'react'
import styled from 'styled-components'

const TeamMemberh2 = styled.h2`
    text-size: 200;
`

export default function Individual(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your team members&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <TeamMemberh2>{details.fullName}</TeamMemberh2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}
