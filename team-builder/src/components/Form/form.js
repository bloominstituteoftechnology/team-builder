import React, { useState } from "react";
import Input from "./input";

const fields = {
  name: "text",
  email: "text",
  role: "text",
};
const blankObj = {
  name: "",
  email: "",
  role: "",
};

const Form = (props) => {
  const [input, setInput] = useState(blankObj);
  // const [disabled, setDisabled] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault(); //prevent refresh
    props.setter([...props.data, input]);
    setInput(blankObj); //reset state to blank
    // setDisabled(true);
  };

  const onChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    let count = [];
    for(let property in input){
      if(input[property]){
        count.push([]);
      }
    }
    // console.log(count)
    // //check input
    // //if all keys have a value
    // //set disabled to false
    // setDisabled(false) //!CONDITIONALLY
  };

  return (
    <form onSubmit={onSubmit}>
      {Object.keys(fields).map((field, i) => {
        return (
          <Input
            key={i}
            id={field}
            name={field}
            type={fields[field]}
            onChange={onChangeHandler}
            show={input[field]}
          />
        );
      })}
      <button>Submit your Entry.</button>
      {/* <button disabled={disabled}>Submit your Entry.</button> */}
    </form>
  );
};
export default Form;