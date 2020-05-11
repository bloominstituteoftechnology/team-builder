import React, { useState } from "react";

const Form = props => {
    const [member, setMember]= useState({
        id: Date.now(),
        name: "",
        email: "",
        role:  ""

    })
    console.log(member)
    const changeHandler  = event => {
        setMember({
          ...member,
          [event.target.name]: event.target.value
        });
      };
    
    return(
     <form onSubmit={event => {
        event.preventDefault();
        setMember({name:"",email:"",role:""})
        props.addnewMember(member)
      }} >
         <label htmlFor = "name"> Name: </label>
         <textarea name = "name" 
                placeholder = " Add Team Member Here" 
                value= {member.name}
                onChange= {changeHandler}
                    />
         <label htmlFor = "email"> Email: </label>
         <textarea name = "email"
                placeholder = "Enter Email"
                value = {member.email}
                onChange= {changeHandler}

         />
         <label htmlFor ="role"> Role: </label>
         <textarea name = "role"
                placeholder = "Role"
                value= {member.role}
                onChange= {changeHandler}

         />
         <button>Summit</button>
         
     </form>
    );


};

    
    export default Form;
    