import React from 'react';

const Members = props => {
     return (
    <div>
      {
          props.members.map(member => 
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          
          <p>{member.email}</p>
          
          <button onClick={() => props.editMember(member.id)}>Edit</button>
          <button onClick={() => props.deleteMember(member.id)}>Delete</button>
        </div> 
    )}
    </div>

  );

};

export default Members;