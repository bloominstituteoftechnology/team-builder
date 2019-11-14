import React from'react'

//TeamList will compose and display information passed to it 
function TeamList(props) {
  console.log(props)
  return(
    props.members.map(
      member => (
        <div key = {member.id}>
          <p>Name:{member.name}</p>
          <p>Email:{member.email}</p>
          <p>Role: {member.role}</p>
        </div>
      )
    )
  )
}
export default TeamList