import React,{useState} from "react";

function MemberForm(props) {
  console.log(props)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    status: false,
  })
  
  const handleSubmit = event => {
    event.preventDefault();
    props.addMember(formData)
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
      <form onSubmit={handleSubmit}>

        <label htmlFor='usernameInput'>Username: </label> 
        <input name='username' onChange={onInputChange}
              type="text"
              id="usernameInput"
              placeholder="enter username"
              maxLength="30" 
              value={formData.username}
              required
        /><br/>

        <label htmlFor='emailInput'>Email: </label>
        <input name='email' onChange={onInputChange}
             type="text"
             id="emailInput"
             maxLength="30"
             value={formData.email}
             required
          /><br/>
  
        <label htmlFor="roleSelect">Role:</label> 
          <select 
          name='role' 
          onChange={onInputChange}
          id="roleSelect"
          >
            <option value={formData.role}>Student</option>
            <option value={formData.role}>TA</option>
            <option value={formData.role}>Instructor</option>
            <option value={formData.role}>Admin</option>
          </select><br/>
          
        <label htmlFor="status">Active member?</label>
          <input name='status' onChange={onInputChange}
          type="checkbox"
          id="status"
          value={formData.status || true}
          /><br/>

          <input
          type="submit"
          />
        
      </form>
  
      </div>
    )
   };
  
  export default MemberForm;

  
