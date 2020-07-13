import React, {useState } from "react";


const Form = props => {

    const handleChange = event => {
        props.setFunction({...props.values, [event.target.name]: event.target.value})   
    };

    //Which is it that I pass into form? Do I pass the 'set' directly from useState? Or do I pass the functions that use that?
    return (
        //console.log("Form", props),
        <div className="employeeForm">
            <form onSubmit={event => props.submit(event)}>
                <label>
                    Name:
                    <input
                     type = "text"
                     name="name"
                     value={props.values.name}
                     onChange = {event => handleChange(event)}
                     />
                </label>
                <label>
                    Email:
                    <input
                     type = "text"
                     name = "email"
                     value={props.values.email}
                     onChange = {event => handleChange(event)}
                     />
                </label>
                <label>
                    Role:
                    <input
                     type = "text"
                     name = "role"
                     value={props.values.role}
                     onChange = {event => handleChange(event)}
                     />
                </label>
                <button>Submit</button>
            </form>
        </div>

    );
}

export default Form;