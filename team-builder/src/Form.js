import React,{useState} from 'react';

function Form(){
    const [teamMember, setTeamMember]=useState({name:"",email:""});
    const handleChange=event=>{
        setTeamMember({...teamMember,[event.target.name]: event.target.value});
      }
    
      const handleSubmit=event=>{
        event.preventDefault();
        setTeamMember({name:'',email:''});
      }
    return(
    <form onSubmit={event=>handleSubmit(event)}>
        <label>
            Name 
            <input 
                type='text' 
                placeHolder='Full Name' 
                name='name' id='nameInput' 
                value={teamMember.name} 
                onChange={
                    event=>handleChange(event)
                    }>
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
                onChange={
                    event=>handleChange(event)
                    }>
            </input>
        </label><br></br>
        <label htmlFor='selectRole'>
            Role
            <select 
                id='selectRole' 
                name='role' 
                onChange={
                    event=>handleChange(event)
                    }>>
                <option ></option>    
                <option value='1'>Computer Programmer</option>
                <option value='2'>Web Developer</option>
                <option value='3'>DataBase Administrator</option>
                <option value='4'>Software Developer</option>
                <option value='5'>Other</option>
            </select>
        </label><br></br>
        <button>Add Team Member</button>
    </form>
    )
} 

export default Form;