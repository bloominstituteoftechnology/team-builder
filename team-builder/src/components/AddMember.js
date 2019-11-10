import React from "react";

const AddMember = props =>{

  return (
    <div className="new-member">
      {props.person.map(people =>(
        <div className="member" key={people.first}>
          <h3>{people.first} {people.last}</h3>
          <p>E-mail: {people.email}</p>
          <p>Current Position: {people.job}</p>
        </div>
      ))}
    </div>
  );
};


export default AddMember;
