import { useState } from "react";
import Form from "./form";
import Member from "./member";
import "./App.css";

function App() {
  const team = [
    { username: "Mike", email: "MikeSmith@gmail.com", role: "Accountant" },
    { username: "John", email: "JohnDoe@gmail.com", role: "Mechanic" },
    { username: "Taylor", email: "TaylorMarks@gmail.com", role: "Dentist" },
    {
      username: "Courtney",
      email: "CourtneySimmons@gmail.com",
      role: "Lawyer",
    },
    {
      username: "Brittany",
      email: "BrittanyAndrews@gmail.com",
      role: "Doctor",
    },
  ];

  const initialFormValues = {
    //Information Input Boxes
    username: "",
    email: "",
    //Drop Down Menu
    role: "",
  };

  const [members, setMembers] = useState(team);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const { username, email, role } = formValues;
    setMembers([
      ...members,
      {
        username: username.trim(),
        email: email.trim(),
        role: role.trim(),
      },
    ]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      {members.map((member, index) => {
        return (
          <Member
            key={index}
            name={member.username}
            email={member.email}
            role={member.role}
          />
        );
      })}
      <Form formValues={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;
