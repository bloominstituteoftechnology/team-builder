import React from 'react'

export default function TeamMember(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your team-member&apos;s details...</h3>
  }

  //! 💡 className 'caps' in App.css capitalizes first letter
  return (
    <div className='teamMem container'>
      <h2 className='caps'>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: <span className='caps'>{details.role.toLowerCase()}</span></p>
    </div>
  )
}