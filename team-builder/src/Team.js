import React from "react";

export default function Team({ members }) {
  return (
    <div>
      {members.map((member) => {
        return (
          <div>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
}
