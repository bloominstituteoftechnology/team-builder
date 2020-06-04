import React, {useState} from 'react';


const Form = props => {
// console.log("props, form.js->",props.addMember);
const [teamMember, setTeamMember] = useState({
    id:Date.now(),
    name:"",
    email:"",
    role:""
});
// console.log(teamMember);
const changeHandler = event => {
    setTeamMember({
        ...teamMember,
        [event.target.name]:event.target.value
    });
};
const submitHandler = event => {
    event.preventDefault();
    // console.log("From props->",props);
    // console.log("teamMember is ->", teamMember);
    props.addMember(teamMember);
    setTeamMember({ name: "", email: "", role: "", id:Date.now()});
};

return(
    // <div>
    //     <p>Form is here</p>
    <form 
    onSubmit={submitHandler}
    >
        <label htmlFor="name">Name: </label>
        <input 
        id="name" 
        name="name"
        label="name" 
        placeholder="Enter Name"
        value={teamMember.name}
        onChange={changeHandler}
        />
        <p />
        <label htmlFor="email">Email: </label>
        <input 
        id="email" 
        name="email"
        label="email" 
        placeholder="Enter Email"
        value={teamMember.email}
        onChange={changeHandler}
        />
        <p />
        <label htmlFor="Role">Role: </label>
        <input 
        id="role" 
        name="role"
        label="role" 
        placeholder="Enter Role"
        value={teamMember.role}
        onChange={changeHandler}
        />
        <p />
        <button>Click To Submit</button>
    </form>
    
    // </div>
);
}

export default Form; 