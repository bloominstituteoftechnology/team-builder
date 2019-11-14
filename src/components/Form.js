import React, {useState} from 'react'

const Form = props => {

  //set name and change name
  const [name, setName] = useState('')
  //set email and change email
  const [email, setEmail] = useState('')
  // set a role and change role
  const [role, setRole] = useState('')

  //creates a new form
  const   newForm = () => {
    setName('');
    setEmail('');
    setRole('');
  }

  return (
    <form onSubmit = {(event) => {
      props.addMember(event, name, email, role)
      newForm()}}>
      <label htmlFor = "name">Name</label>
      <input
        id = "name"
        name = "name"
        type = "text"
        value = {name}
        required
        onChange = {(event) => setName(event.target.value)} />
      <label htmlFor = "email">Email</label>
      <input
        id = "email"
        name = "email"
        type = "email"
        value = {email}
        required
        onChange = {(event) => setEmail(event.target.value)} />
      <label htmlFor = "role">Role</label>
      <input
        id = "role"
        name = "role"
        type = "text"
        value = {role}
        required
        onChange = {(event) => setRole(event.target.value)} />
      <button type = "submit">Submit</button>
    </form>
  );

}
export default Form;