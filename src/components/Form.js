import React from "react";

const Form = props => {
  return (
    <div className="formbox">
      {props.members.map(member => (
        <div className="fromtext" key={member.id}>
          <h3>Member Number: {member.id}</h3>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Form;
