import React from 'react';

export default function TeamMembers({teamMembers}) {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      {teamMembers.map(member => (
        <div style={{border: '2px solid black', padding: '5px', borderRadius: '4px', margin: '5px'}}>
          <h2>Name: {member.name}</h2>
          <h5>Email: {member.email}</h5>
          <h5>Role: {member.role}</h5>
          <button>Edit</button>
        </div>
      ))}
    </div>
  )
}