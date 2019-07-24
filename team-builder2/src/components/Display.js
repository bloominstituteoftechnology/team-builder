import React from "react";
import Forms from "./Forms";

export default function Display({ newMember }) {
  console.log("I am a prop", newMember);
  return (
    <div className="team-container">
      <h3>Name: {newMember.name}</h3>
      <h3>Email: {newMember.email}</h3>
      <h3>JobTitle: {newMember.jobtitle}</h3>
    </div>
  );
}
