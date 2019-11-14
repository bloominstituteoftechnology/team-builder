
import React from 'react';

function TeamList(props) {
  return (
    props.members.map(member => (
      <div key = {member.id}>
        <p>Name: {member.name}</p>
        <p>Email: {member.email}</p>
        <p>Role: {member.role}</p>
      </div>
    ))
  )
};

export default TeamList;