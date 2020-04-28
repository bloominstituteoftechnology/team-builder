import React from 'react';
import '../App.css';


const MembersList = (props)=>{
  
  const teamMembers = props.teamMembers;

  const setEditMember=(member)=>{
    const setEditMember = props.setEditMember;
    setEditMember(member);
  }

  return (
    <div className="member-list">
      {teamMembers.map(member=>(
        <div className="member" key={member.id}>
          <h3>{member.name}</h3>
          <p>{member.email}</p>
          <p>{member.role}</p>
          <div onClick={()=>setEditMember(member)} className="edit-button">Edit</div>
        </div>
      ))
      }
    </div>
  );
};
export default MembersList;
