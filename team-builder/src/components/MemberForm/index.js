import React from "react";

const MemberForm = () => {
  return (
    <form>
      <label htmlFor="name">Name </label>
      <input name="name" id="name" type="text" placeholder="Name" />
      <label htmlFor="email">Email </label>
      <input name="email" id="email" type="email" placeholder="Email address" />
      <label htmlFor="role">Role </label>
      <input name="role" id="role" type="text" placeholder="Role" />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;
