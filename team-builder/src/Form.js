import React from "react";


const Form = (props) => {

    const handleChange = e => {
        const { value, name } = e.target;
        props.change(name, value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.submit();
    }
return(
<form onSubmit={handleSubmit}>
<div className='form'>
    <label htmlFor='name'>Name</label>
    <input 
    id='name' 
    placeholder='Enter your name here'
    name='name' 
    type='text'
    value={props.name}
    onChange={handleChange}
    />
    <br/>

    <label htmlFor='email'>Email</label>
    <input 
    id='email'
    placeholder='johndoe1234@email.com'
    name='email' 
    type='email'
    value={props.email}
    onChange={handleChange}
    />
    <br/>

<label>Role
    <select name='role' onChange={handleChange} value={props.role}>
        <option value=''>Select a role</option>
        <option value=''>Project Coordinator</option>
        <option value=''>Team Leader</option>
        <option value=''>Snack Fetcher</option>
    </select>
</label>

 <div className='submit'>
    <button >Create Team</button>
 </div>

</div>
</form>
);
}

export default Form;