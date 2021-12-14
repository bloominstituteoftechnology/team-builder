import React from "react";


const Form = (props) => {
    

    const handleChange = event =>{
        const { name, value  } = event.target
        props.change(name, value)
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }
    console.log(props)
    return (
        <form onSubmit={handleSubmit}>
            <label> Name
                <input
                placeholder="Enter Your Name Here"
                value={props.values.name}
                name='name'
                onChange={handleChange}
                />
            </label>
            <label> Email
                <input
                placeholder="Enter Your Email Here"
                value={props.values.email}
                name='email'
                onChange={handleChange}
                />
            </label>
            <label> Role
                <input
                placeholder="Enter Your Role Here"
                value={props.values.role}
                name='role'
                onChange={handleChange}
                />
            </label>
            <input type='submit' value='Create your Team!'/>
        </form>
        
    )
    

}

export default Form;