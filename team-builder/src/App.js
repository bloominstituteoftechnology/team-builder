import React , {useState} from 'react';
import './App.css';


const App = () => {

  const MemberForm = (props) => {
    console.log("MemberForm props:" , props);
    const [member , setMember] = useState ({
        Name:"",
        Email:"",
        Role:""
    });

    const changeHandler = (e) => {
      console.log (e.target.value);
      console.log("member" , member);
      setMember({
        ...member,
        [e.target.name]: e.target.value
      });
    };

    const submitForm = (e) => {
      e.preventDefault();
      props.addNewMember(member);
      setMember({
        Name:"",
        Email:"",
        Role:""
      });
    };
}
  

 
  return (
    <form onSubmit = {submitForm}>
      <label htmlFor ="name">Name</label>
      <input 
      type = "text"
      name = "title"
      value = {member.title}
      onChange = {changeHandler}
    />
  <label htmlFor = "email">Email</label>
  <input
  type = "email"
  name = "email"
  value = {member.email}
  onChange = {changeHandler}
  />
<label htmlFor = "role">Role</label>
<input 
type = "textarea"
name = "role"
value = {member.role}
/>

<button type ="submit">Add New Member</button>
</form>
  );
};

export default App;
