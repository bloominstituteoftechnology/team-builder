import React, { useState } from "react";

 const TeamBuilder = props => {
    const [form, setForm] = useState({
        Name: "",
        Email: "",
        Role: ""
      });

      const handleChanges = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
      };

      const submitHandler = event => {
        event.preventDefault();
        const newForm = {  
          ...form,
          id: Date.now()
        };
          props.addNewMember(newForm)
          setForm({ Name: "",
        Email: "",
        Role: ""})
        console.log(newForm)
    }
      
      

      return (
         
              <form onSubmit={submitHandler} className="form">
                  
                  <label>Name:</label >
                  <input className="input" onChange={handleChanges} id="name" type="text" name="Name" />
                 
                  <label>Email:</label>
                  <input className="input" onChange={handleChanges} id="email" type="text" name="Email" />
                  
                  <label>Role:</label>
                  <input className="input" onChange={handleChanges} id="Role" type="text" name="Role" />
                  
                  <button>Submit</button>
              </form>
      )
}

export default TeamBuilder;