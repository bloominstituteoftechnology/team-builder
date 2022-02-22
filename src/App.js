import './App.css';
import TeamMember from "./Components/TeamMember";
import Form from "./Components/Form";
import React, { useState } from "react";

const initialValues = {
  name: '',
  // I used "height" and "catchphrase" just for fun and practice. I can change these to "email" and "role" if needed for MVP.
  height: '',
  catchphrase: '',
}

const teamCaptain = [
  {
    name: "Patches O'Houlihan",
    height: "5 ft 10 in",
    catchphrase: "If you can dodge a car, you can dodge a ball"
  }
]



function App() {

  const [teamMembers, setTeamMembers] = useState(teamCaptain);
  const [values, setValues] = useState(initialValues)

  const onSubmit = () => {
    setTeamMembers([values, ...teamMembers]);
    setValues({name:'', height:'', catchphrase:''});
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value});
  }


  return (
    <div className="container">
      <h1>Average Joes</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
        />
        {teamMembers.map(member => {
          return (
                < TeamMember key={member.name} details={member} />
          )
        })}
    </div>
  );
}

export default App;
