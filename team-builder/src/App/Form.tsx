import { TeamMember } from '../App';
import React, { useState } from 'react';

export const Form: React.FC<{ addMember: (newUser: TeamMember) => void }> = (
  props
) => {
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const ammendedUser = {
      ...newUser,
      [evt.target.name]: evt.target.value,
    };
    setNewUser(ammendedUser);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    props.addMember(newUser);
  };

  return (
    <form onSubmit={(evt: React.FormEvent) => handleSubmit(evt)}>
      <div className="formGroup">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          id="name"
          type="text"
          value={newUser.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          id="email"
          type="email"
          value={newUser.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="role">Role:</label>
        <select
          name="role"
          id="role"
          value={newUser.role}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleChange(e)
          }
        >
          <option>Frontend Engineer</option>
          <option>Backend Engineer</option>
          <option>Designer</option>
          <option>Data Architect</option>
        </select>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};
