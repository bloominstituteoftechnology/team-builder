import React, { useState } from "react";
import styled from "styled-components";
import List from "./List.js";
import Form from "./Form.js";

const initialTeamMembers = [
  { name: "Erik", email: "erik@gmail.com", role: "Front End Dev" },
  { name: "Douglas", email: "douglas@gmail.com", role: "Back End Dev" },
  { name: "Colter", email: "colter@gmail.com", role: "FullStack Dev" },
  { name: "Tyler", email: "tyler@gmail.com", role: "UX/UI Designer" },
  { name: "Ben", email: "ben@gmail.com", role: "Sales Team Lead" },
];

const StyledApp = styled.div`
  display: flex;
`;

export default function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = (formData, clearFormInputs) => {
    if (!formData.name || !formData.email || !formData.role) {
      setErrorMessage("All Fields Must Be Filled Out");
      return;
    }
    setTeamMembers([...teamMembers, formData]);
    clearFormInputs();
  };

  return (
    <StyledApp>
      <List teamMembers={teamMembers} />

      <Form
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        submitForm={submitForm}
      />
    </StyledApp>
  );
}
