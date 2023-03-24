import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [memberList, setMemberList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const change = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
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
    setFormData({ name: "", email: "", role: "" });
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
          value={formData.name}
          required
        />
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={change}
          value={formData.email}
          required
        />
        <label htmlFor="role"> Role: </label>
        <select
          id="roleSelection"
          name="role"
          onChange={change}
          value={formData.role}
          required
        >
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
            <div key={idx} className={"memberCard"}>
              <div>
                <h1 id="memberName">{member.name}</h1>
                <img
                  id="profilePic"
                  src="https://vectorified.com/images/no-profile-picture-icon-28.png"
                  alt="profile"
                ></img>
                <h2 id="memberRole">{member.role}</h2>
                <h2 id="memberEmail">{member.email}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
