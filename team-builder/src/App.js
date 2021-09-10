import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./Form";

const teamNames = [
  { name: "Hayley Williams", role: "Manager" },
  { name: "Maria Brink", role: "Assistant Manager" },
  { name: "Taylor Momsen", role: "Lead Frontend Developer" },
  { name: "Amy Lee", role: "Junior Frontend Developer" },
  { name: "Lacey Sturm", role: "Lead Backend Developer" },
];
const formValues = {
  name: "",
  name: "",
};

function App() {
  const [members, setMembers] = useState(teamNames);
  const [formValue, setFormValue] = useState(formValues);

  const update = (newName, newValue) => {
    setFormValue({ ...formValue, [newName]: newValue });
  };

  const onSubmit = () => {
    const newbie = {
      name: formValue.name.trim(),
      role: formValue.role.trim(),
    };

    setMembers([...members, newbie]);
    setFormValue(teamNames);
  };
  return (
    <div className="App">
      <h1>Rocker Chick Web Devs</h1>
      <Form formValue={formValue} update={update} submit={onSubmit} />
      {members.map((member) => {
        return (
          <div>
            {member.name} is the {member.role}
          </div>
        );
      })}
    </div>
  );
}

export default App;
