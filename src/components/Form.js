import React from "react";

const Form = props => {
  return (
    <div className="">
      {props.members.map(member => (
        <div className="" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Form;
