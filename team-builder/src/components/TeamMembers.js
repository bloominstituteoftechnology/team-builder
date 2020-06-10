import React from 'react';





function TeamMembers({teamMember}){
   
    
    return (
      <div>
        {teamMember.map(member => (
          <div>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <p>{member.role}</p>  
          </div>
        ))}
      </div>
    );
};
export default TeamMembers;