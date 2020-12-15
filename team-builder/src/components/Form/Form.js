import React, { useState } from "react";
import Input from "./Input/Input";

const fields = {
  name: "text",
  age: "number",
  role: "text",
};

const Form = (props) => {
  const blankObj = {
    name: "",
    age: '',
    role: "",
  };
  const [input, setInput] = useState(blankObj);
  console.log(input);

  const onSubmit = (e) => {
    e.preventDefault(); //prevent refresh
    //*add this person to data in App.js

    props.setter({...props.data, input});
    setInput(blankObj); //reset state to blank
    console.log(input);
  };

  const onChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
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
    </form>
  );
};
export default Form;
