import React, { useState } from 'react';



function Form(props) {

    const [data, setData] = useState({name: '', email: '', role: ''});
    
    const handleSubmit = event => {
        event.preventDefault();
        props.newData(data);
      };

    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    

    return (
    <div className="formy">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            alue={data.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            alue={data.role}
            onChange={event => handleChange(event)}
          />
        </label>
        
        <button>Submit!</button>
      </form>
    </div>
    );
  }
  
  export default Form;
  