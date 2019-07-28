import React from 'react';
import { Link } from 'react-router-dom';

// { name: "", email: "", role: "" }

const Card = (props) => {
  // const person = props.person;
  const { person } = props;
  return (
    <div>
      <div>{person.name}</div>
      <div>{person.email}</div>
      <div>{person.role}</div>
      <Link to={`/edit/${person.id}`}>Edit</Link>
    </div>
  );
};

export default Card;