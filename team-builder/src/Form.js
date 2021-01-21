import React,{useState} from 'react';

const Form=(props=>{
    const defaultState={name:'',email:'',role:''};

    const [teamMember, setTeamMember]=useState(defaultState);

    const handleChange=event=>{
        setTeamMember({...teamMember,[event.target.name]: event.target.value});
      }
    
      const handleSubmit=event=>{
        event.preventDefault();
        props.setAddedMember([...props.addedMember,teamMember]);
        setTeamMember(defaultState);
      }
    return(
    <form onSubmit={handleSubmit}>
        <label>
            Name 
            <input 
                type='text' 
                placeHolder='Full Name' 
                name='name' 
                id='nameInput' 
                value={teamMember.name} 
                onChange={handleChange}>
            </input>
        </label><br></br>
        <label>
            Email 
            <input 
                type='text' 
                placeHolder='Email' 
                name='email' 
                id='emailInput' 
                value={teamMember.email} 
                onChange={handleChange}>
            </input>
        </label><br></br>
        <label htmlFor='selectRole'>
            Role
            <select 
                id='selectRole' 
                name='role' 
                onChange={handleChange}>>
                <option ></option>    
                <option value='Computer Programmer'>Computer Programmer</option>
                <option value='Web Developer'>Web Developer</option>
                <option value='DataBase Administrator<'>DataBase Administrator</option>
                <option value='Software Developer'>Software Developer</option>
                <option value='Other'>Other</option>
            </select>
        </label><br></br>
        <button type='submit' >Add Team Member</button>
    </form>
    )
})

export default Form;