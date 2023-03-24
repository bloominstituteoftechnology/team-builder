import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const members = [
  {
    name: "",
    email: "",
    role: "",
  },
];
function App() {
  const [memberList, setMemberList] = useState(members);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const change = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
    // setFormData(...form{ name: "", email: "", role: "" });
  };

  const submit = (evt) => {
    evt.preventDefault();
    setMemberList(
      memberList.concat({
        name: formData.name,
        email: formData.email,
        role: formData.role,
      })
    );
  };
  return (
    <div className="pageContainer">
      <h1>My Team</h1>
      <form onSubmit={submit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={change}
        />
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={change}
        />
        <label htmlFor="role"> Role: </label>
        <select id="roleSelection" name="role" onChange={change}>
          <option value="">Select Role</option>
          <option value="Backend engineer">Backend Engineer</option>
          <option value="Frontend engineer">Frontend engineer</option>
          <option value="Senior engineer">Senior Engineer</option>
          <option value="hr">Human Resources</option>
        </select>
        <input type="submit" value="Add Member" />
      </form>

      <h2 className="memberSection title">Our Members</h2>
      <div className="memberSection members">
        {memberList.map((member, idx) => {
          return (
            <div className={"memberCard"}>
              <div>
                <h1>{member.name}</h1>
                <h2>{member.email}</h2>
                <h2>{member.role}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
