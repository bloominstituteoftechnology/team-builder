import React from 'react';

const Card = (props) => {
console.log(props)
  return (
    <div>
      <p>{props.data.name} is the {props.data.role} of our bunch and is {props.data.age} years old</p>
    </div>
  )
};

export default Card;