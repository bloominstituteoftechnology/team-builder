import React, { useState } from "react";

let MemberForm = props =>{
    let [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    let handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    // console.log(member)
    };
    let submitForm = event =>{
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: ""});
    };

    return (
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">Name</label>
            <input 
            id = 'name'
            type = 'text'
            name = 'name'
            onChange = {handleChanges}
            placeholder = 'Legacy Rem'
            value = {member.name}
            />
            <label htmlFor = "email">E-mail</label>
            <input
            id = 'email'
            type = 'email'
            name = 'email'
            onChange = {handleChanges}
            placeholder = 'Rlegacy@gmail.com'
            value = {member.email}
            />
            <label htmlFor='role'>Role</label>
            <input
            id = 'role'
            type = 'text'
            name  = 'role'
            onChange = {handleChanges}
            placeholder = 'ReLe'
            value = {member.role}
            />
            <button type = "submit">Submit Entry</button>
        </form>
    )

} 

export default MemberForm;