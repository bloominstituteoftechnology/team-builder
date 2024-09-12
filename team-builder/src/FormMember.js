import React, { useState } from 'react'
import Members from './Members'
//import ReactDOM from 'react-dom';


const FormMember = (props) => {
    //const {newMember} = props;
    const [members, setMembers] = useState ({name: "" , email: "" , role: "" });
    console.log(members);

//const [otherChnages, members, props] = props;
//const [setMembers] = useState({
    //title: props.title,
    //email: props.email,
    //role: props.role
//});

const submitMember = (event) => {
    event.preventDefault();
    props.newMember(members);
    setMembers({ name: members.name, email: members.email, role: members.role, });
};

const otherChanges = (event) =>{
    console.log(event.target.value, "event");
    setMembers({ name: event.target.value, email: event.target.value, role: event.target.value, });
};

return(
    <div>
        <Members members={members}/>
        <form onSubmit={submitMember}>
            <label htmlFor="name">Name</label>
            <input 
            id="name"
            type="text"
            placeholder="Enter Name"
            value={members.name}
            onChange={otherChanges}
            />

            <label htmlFor="role">Role</label>
            <input
            id="role"
            type="text"
            placeholder="Enter Role"
            value={members.role}
            onChange={otherChanges}
            />

            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="text"
            placeholder="Enter Email"
            value={members.email}
            onChange={otherChanges}
            />
            <button type="submit">Add Person</button>
            </form>
    </div>
    );
};

export default FormMember;