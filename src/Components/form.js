import React from "react";

const Form = (props) => {
const handleChange = event => {
    const { name, value } = event.target
    props.Change(name, value);
}
 const handleSubmit = event => {
    event.preventDefault();
    props.submit()
}
    return (
        <form onSubmit={handleSubmit}>
            <label> Name
            <input 
             placeholder="Enter Your Name Here!"
             name="name"
             value={props.values.name}
             onchange={handleChange} 
            />
              </label>
              <label>Email
                <input 
                placeholder="Enter Your Email Here!"
                name="email"
                value={props.values.email}
                onChange={handleChange} 
                />
              </label>
              <label>Role
                <input 
                placeholder="Enter Your Role Here!;"
                name="role"
                value={props.values.role}
                onChange={handleChange} 
                />
              </label>
              <input type="submit" value="Create your team"/>
        </form>
    )
}

export default Form; 