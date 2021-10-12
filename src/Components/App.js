import React, { useState } from "react";
import List from "./List.js";
import Form from "./Form.js";

export default function App() {
  const [teamMembers, setTeamMembers] = useState([
    { name: "erik", email: "erik@gmail.com", role: "Front End Dev" },
  ]);

  return (
    <>
      <List teamMembers={teamMembers} />
      <Form />
    </>
  );
}
