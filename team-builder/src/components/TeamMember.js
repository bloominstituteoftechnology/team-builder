import React from 'react'

export default function TeamMember(props) {
  const { details } = props


  return (
    <div className='team-member-container'>
      <h2>House Name: {details.name}</h2>
      <h3>Region in Westeros: {details.region}</h3>
    </div>
  )
}
//Passing down these props to render the details of each individual member