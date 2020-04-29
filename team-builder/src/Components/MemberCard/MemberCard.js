import React from "react";
import "./memberCard.css";

export default function MemberCard({ member, setMemberToEdit, index }) {
  return (
    <div className="member-card" key={index}>
      <p>
        <span>Full Name: </span>
        {member.firstName} {member.lastName}
      </p>

      <p>
        <span>Age: </span>
        {member.age}
      </p>

      <p>
        <span>Gender: </span>
        {member.gender === "Female" ? "Female" : "Male"}
      </p>

      <div onClick={() => setMemberToEdit(member)} className="edit-btn">
        Edit
      </div>
    </div>
  );
}
