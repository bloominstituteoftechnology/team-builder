import React,{useState} from "react";

export function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    status: false,
  })
  
  const handleSubmit = event => {
    event.preventDefault();
  }

  const onInputChange = event => {
      setFormData({
        ...formData,
        [event.target.name] : event.target.value,
      });
  };
  
    return (
      <div className="container"> 
      <h1>Form App</h1>
      <h2>The name is {''}</h2>
      <h2>Email: {''}</h2>
      <h2>Role: {''}</h2>
      <h2>Status: {false}</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor='usernameInput'>Username: </label> 
        <input name='username' onChange={onInputChange}
              type="text"
              id="usernameInput"
              name="username"
              placeholder="enter username"
              maxLength="30" 
              required
        /><br/>

        <label htmlFor='emailInput'>Email: </label>
        <input name='email' onChange={onInputChange}
             type="text"
             id="emailInput"
             name="email"
             placeholder="enter email"
             maxLength="30"
             required
          /><br/>
  
        <label htmlFor="roleSelect">Role:</label> 
          <select name='role' onChange={onInputChange}
          id="roleSelect">
            <option value='Student'>Student</option>
            <option value='TA'>TA</option>
            <option value='Instructor'>Instructor</option>
            <option value='Admin'>Admin</option>
          </select><br/>
          
        <label htmlFor="status">Active member?</label>
          <input name='status' onChange={onInputChange}
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

  
