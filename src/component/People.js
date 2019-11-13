import React from "react";

const People = props => {
  return (
    <div className="people-list">
      {props.people.map(people => (
        <div className="people" key={people.id}>
          <h2>{people.name}</h2>
          <p>{people.email}</p>
          <p>{people.role} Developer</p>
        </div>
      ))}
    </div>
  );
};

export default People;
