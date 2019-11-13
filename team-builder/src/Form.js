import React, { useState } from "react";

const Tm = [
  { name: "Ephriam Winslow", title: "UI Developer", cohort: "WEB16" },
  { name: "Tom Wake", title: "UI Developer", cohort: "WEB16" },
  { name: "Tom Howard", title: "UI Developer", cohort: "WEB16" }
];

function Form() {
  const [member, setMember] = useState({
    name: "Name",
    title: "Title",
    cohort: "Cohort"
  });

  return (
    <div>
      <Form>
        <input id="name" type="text" name="name">
          Name
        </input>
        <input id="title" type="text" name="title">
          Title
        </input>
        <input id="cohort" type="text" name="cohort">
          Cohort
        </input>
        <button type="submit">Add Member</button>
      </Form>
      <>
        <ul>
          {Tm.map(item => (
            <li>
              <h1>{item.name}</h1>
              <p>{item.title}</p>
              <p>{item.cohort}</p>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default Form;
