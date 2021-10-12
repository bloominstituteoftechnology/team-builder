import React, { useState } from "react";
import List from "./List.js";
import Form from "./Form.js";

export default function App() {
  const [teamMembers, setTeamMembers] = useState([
    { name: "Erik", email: "erik@gmail.com", role: "Front End Dev" },
    { name: "Douglas", email: "douglas@gmail.com", role: "Front End Dev" },
    { name: "Colter", email: "colter@gmail.com", role: "Front End Dev" },
    { name: "Tyler", email: "tyler@gmail.com", role: "Front End Dev" },
    { name: "Ben", email: "ben@gmail.com", role: "Front End Dev" },
  ]);

  return (
    <>
      <List teamMembers={teamMembers} />
      
      <Form />
    </>
  );
}
