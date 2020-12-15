import React from "react";
import Input from "./Input/Input";

const fields = {
  name: "text",
  age: "number",
  role: "text",
};

const Form = (props) => {
  return (
    <>
      <div>Form from inside Form.js</div>
      {Object.keys(fields).map((field, i) => {
        console.log(fields[field]);
        return (
          <Input
            key={i}
            id={field}
            name={field}
            type={fields[field]}
            addToState={props.addToState}
          />
        );
      })}
    </>
  );
};
export default Form;
