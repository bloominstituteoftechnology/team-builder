import React,{useState} from 'react'
import './App.css';

const initialFormValue = {
  name:'',
  email: '',
  role:'',
}

function App() {

  const [members,setMembers] = useState([]);
  const [formValues,setFormValues] = useState(initialFormValue);

  const change = evt =>{
    const {name,value} = evt.target;
    setFormValues({...formValues, [name]:value})
  };

  const submit = evt =>{
    evt.preventDefault();
    const newMember = {
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      role:formValues.role.trim(),
    }
    setMembers(members.concat(newMember));
    setFormValues(initialFormValue);
  }
    
  const display = members.map(member =>{
    return (
      <div key={member.name}>
      <p>Name: {member.name}</p>
      <p>Email: {member.email}</p>
      <p>Role: {member.role}</p>
      </div>
    )
    })

  return (
    <div className="App">
      <h1>this is form</h1>
      <form onSubmit={submit}>
        <label> Name
        <input name='name' type='text' onChange={change} value={formValues.name} placeholder='enter the name'/>
        </label>
        <input name='email' type='email' onChange={change} value={formValues.email} placeholder='enter an email'/>
        <select name='role' onChange={change} value={formValues.role}>
          <option value=''>choose an option</option>
          <option value='Coder'>Coder</option>
          <option value='Driver'>Driver</option>
          <option value='Pilot'>Pilot</option>
          <option value='Businessman'>Businessman</option>
        </select>
        <button>Submit</button>
      </form>
      <h2>List of friends</h2>
      {display}
    </div>
  );
}

export default App;
