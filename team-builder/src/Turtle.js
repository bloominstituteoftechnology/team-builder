import React from 'react'

export default function Turtle(props) {
     const   details = props
     console.log(details);
  if (!props) {
    return <h3>Working fetching TMNT details...</h3>
  }

  return (
    <div className='turtleContainer'>
      <h2>{details.details.name}</h2>
      <p>Email: {details.details.email}</p>
      <p>Role: {details.details.role}</p>
    </div>
  )
}