import React, { useState, useEffect } from "react";
import Form from "./Comp/Form.js";
import Employee from "./Comp/Employee.js";
import axios from "axios";
import "./App.css";

//The shape of the state that drives the form
const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

function App() {
  const [team, setTeam] = useState([]); //This is empty as we are setting it to the user input
  console.log(team);
  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  // fix this using the state hook
  const [formValues, setFormValue] = useState(initialFormValues); //Setting the StateHook to hold the form. Look to where the initialFormValues is coming from

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValue({
      ...formValues,
      [inputName]: inputValue,
    });
  };
  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email

    let newTeammate = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newTeammate.username || !newTeammate.email || !newTeammate.role)
      return;
    axios
      .post("fakeapi.com", newTeammate)
      .then((res) => {
        setTeam([...team, res.data]);
        setFormValue(initialFormValues);
      })
      .catch((err) => {
        // debugger;
        console.log(err);
      });
  };
  //  d) also on success clear the form

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setTeam(res.data));
  }, []);

  return (
    <div className="App">
      <h1>Our Team</h1>

      <Form
        // 🔥 STEP 2 - The form component needs its props.
        //  Check implementation of FriendForm
        //  to see what props it expects.
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {team.map((teams) => {
        return <Employee key={teams.id} details={teams} />;
      })}
    </div>
  );
}

export default App;
//TODO- Remember to add your updateForm and submitForm
/*Add  to return
  update={updateForm}
  submit={submitForm}
  
  
  
  
  */
