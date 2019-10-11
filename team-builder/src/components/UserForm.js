import React, {useState} from 'react';

const UserForm = props => {

  console.log(props)

  const [user, setUser] = useState({ name:"", email:"", role:"" })

  const handleChange = changed => {
    setUser({ ...user, [changed.target.name]: changed.target.value });
  }

  const handleSubmit = submit => {
    submit.preventDefault();
    props.addUserCB(user);
    setUser({ name:"", email:"", role:"" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Users Name</label>
      <input 
        id="name"
        value={user.name}
        name="name"
        type="text"
        onChange={handleChange}
      />
      <label htmlFor="email">Users Email</label>
      <input 
        id="email"
        value={user.email}
        name="email"
        type="text"
        onChange={handleChange}
      />
      <label htmlFor="role">Users Role</label>
      <input 
        id="role"
        value={user.role}
        name="role"
        type="text"
        onChange={handleChange}
      />
      <button type="submit">Add User</button>
    </form>
  )
}

export default UserForm;