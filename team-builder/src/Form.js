import React from "react";

export default function TeamMembers({
  TeamMembers,
  HandleChange,
  HandleSubmit,
}) {
  return (
    <div>
      <form onSubmit={() => HandleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={TeamMembers.name}
            onChange={() => HandleChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={TeamMembers.email}
            onChange={() => HandleChange}
          />
        </label>
        <label>
          Role:
          <input name="role" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
