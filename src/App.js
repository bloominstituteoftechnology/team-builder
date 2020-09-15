import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

// const teamList = [
//   { name: "Carl", email: "carl@carl.com", role: "student" },
//   { name: "tim", email: "tim@tim.com", role: "instructor" },
//   { name: "sarah", email: "sarah@sarah.com", role: "Team Lead" },
// ];

// const initialFormValues = {
//   name: "",
//   email: "",
//   role: "",
// };

function App() {
  // const [team, setTeam] = useState([]);

  // const [formValues, setFormValues] = useState(initialFormValues);
  return (
    <div className="contianer">
      <h1>Form</h1>

      <Form />
    </div>
  );
  // return (
  //   // <div className="App">
  //   //   <h2>Hello World</h2>
  //   // </div>
  // );
}

export default App;
