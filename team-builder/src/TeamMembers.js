import React from "react";

const Tm = [
  {
    name: "Ephriam Winslow",
    email: "MermaidLvr25@gmail.com",
    role: "UI Developer"
  },
  { name: "Tom Wake", email: "gassyboy69@gmail.com", role: "Architect" },
  {
    name: "Tom Howard",
    email: "MermaidLvr26@gmail.com",
    role: "Backend Developer"
  }
];

function TeamMembers() {
  return (
    <>
      <ul>
        {Tm.map(item => (
          <li>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
            <p>{item.role}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TeamMembers;
