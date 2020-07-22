import React from "react"

export default function Team ({ details }) {

  return (
    <div className='friend container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}