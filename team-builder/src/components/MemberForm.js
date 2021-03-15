import React,{useState} from "react";
import axios from "axios";

export function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState(false)
  const onSubmit = event => {
    event.preventDefault();
    axios.post('/', {username, email, role, status});
  }

  const onUsernameChange = event => setUsername(event.target.value)
  const onEmailChange = event => setEmail(event.target.value)
  const onRollChange = event=> setRole(event.target.value)
  const onStatusChange = event => setStatus(event.target.checked)
  

  
  

    return (
      <div className="container"> 
      <h1>Form App</h1>
      <h2>The name is {username || ' '}</h2>
      <h2>Email: {email || ''}</h2>
      <h2>Role: {role || ''}</h2>
      <h2>Status: {status ? 'active' : 'inactive'}</h2>

      <form onSubmit={onSubmit}>

        <label htmlFor='usernameInput'>Username: </label> 
        <input onChange={onUsernameChange}
              type="text"
              id="usernameInput"
              name="username"
              placeholder="enter username"
              maxLength="30" 
              required
        /><br/>

        <label htmlFor='emailInput'>Email: </label>
        <input onChange={onEmailChange}
             type="text"
             id="emailInput"
             name="email"
             placeholder="enter email"
             maxLength="30"
             required
          /><br/>
  
        <label htmlFor="roleSelect">Role:</label> 
          <select onChange={onRollChange}
          id="roleSelect" 
          name="role">
            <option value='Student'>Student</option>
            <option value='TA'>TA</option>
            <option value='Instructor'>Instructor</option>
            <option value='Admin'>Admin</option>
          </select><br/>
          
        <label htmlFor="status">Active member?</label>
          <input onChange={onStatusChange}
          type="checkbox"
          id="status"
          value="yes"
          /><br/>

          <input
          type="submit"
          />
        
      </form>
  
      </div>
    )
   };
  
  export default App;

  
