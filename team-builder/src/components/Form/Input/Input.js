import React from "react";

const Input = (props) => {
  console.log(props.addToState);
  return (
    <>
      <label htmlFor={props.id}>
        {" "}
        Please provide your {props.id}:
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          onChange={props.addToState}
        />
      </label>
      <br />
    </>
  );
};

export default Input;
