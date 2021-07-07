import React from 'react';

const Members = props => {
  return (
    <div className="member-list">
      {props.members.map((member) => {
        return (
          <div className="info-item" key={member.id}>
           <h2>{member.memberName}</h2>
           <p>{member.email}</p>
           </div>
        )
      })}
    </div>
  )
}

export default Members;