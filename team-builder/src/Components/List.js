


import React from "react";

const List = (props) => {
  
  return (
    <div className="people">
      {props.people.map((person, index) => (
        <div className="list" key={person.id}>
          <h2>{person.name}</h2>
          <p>{person.email}</p>
          <p>{person.role}</p>
        </div>
      ))}
    </div>
  );
};

export default List;