import React,{useState} from "react"


export function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState(false)

    return (
      <div className="container"> 
      <h1>Form App</h1>
      <h2>The name is {username || ' '}</h2>
      <h2>Email: {email || ''}</h2>
      <h2>Role: {role || ''}</h2>
      <h2>Status: {status ? 'active' : 'inactive'}</h2>
      <form>
        <label htmlFor='usernameInput'>Username: </label> 
        <input onChange={event => {
          setUsername(event.target.value)
        }}
              type="text"
              id="usernameInput"
              name="username"
              placeholder="enter username"
              maxLength="30" 
              required
        /><br/>

        <label htmlFor='emailInput'>Email: </label>
        <input onChange={event =>{
          setEmail(event.target.value)
        }}
             type="text"
             id="emailInput"
             name="email"
             placeholder="enter email"
             maxLength="30"
             required
          /><br/>
  
        <label htmlFor="roleSelect">Role:</label> 
          <select onChange={event=> {
            setRole(event.target.value)
          }}
          id="roleSelect" 
          name="role">
            <option value='Student'>Student</option>
            <option value='TA'>TA</option>
            <option value='Instructor'>Instructor</option>
            <option value='Admin'>Admin</option>
          </select><br/>
          

        <label htmlFor="status">Active member?</label>
          <input onChange={event => {
            setStatus(event.target.checked)
          }}
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

  
