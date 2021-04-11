import React from 'react';

const Card = (props) => {
console.log(props)
  return (
    <div>
      <p>{props.data.name} is the {props.data.role} of our bunch and their email is {props.data.email} </p>
    </div>
  )
};

export default Card;