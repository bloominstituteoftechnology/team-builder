import React from "react";
import Card from "./card";

const Display = (props) => {
  // console.log(props.data);
  return (
    <div>
      {props.data.map((person, i) => {
        return <Card data={props.data[i]}/>;
      })}
    </div>
  );
};

export default Display;