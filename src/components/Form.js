import React, {useState, useEffect} from 'react';


const Form = props => {
// console.log("props, memberToEdit form.js->",props.memberToEdit);
let startMember = {
    id:Date.now(),
    name:"",
    email:"",
    role:""
};
// if(props.memberToEdit !== undefined){
//     startMember = props.membeToEdit;
// };
const [teamMember, setTeamMember] = useState(startMember);

useEffect(() =>{
    // const memberObj = storedTeam.find(element => element.id === Number(props.memberToEdic)); 
    // console.log("Form.js memberToEdit->",props.memberToEdit);
    if(props.memberToEdit!==undefined) {
        setTeamMember(props.memberToEdit);
    }
},[props.memberToEdit])

const changeHandler = event => {
    setTeamMember({...teamMember, [event.target.name]:event.target.value
    });
};
const submitHandler = event => {
    event.preventDefault();
    if(props.isEditing) {
        setTeamMember(props.memberToEdit);
        props.editMember(teamMember);
        alert("Yes we're editing a Member!");
        return
    }
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
        type="text"
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
        type="text" 
        placeholder="Enter Email"
        value={teamMember.email}
        onChange={changeHandler}
        />
        <p />
        <label htmlFor="role">Role: </label>
        <input 
        id="role" 
        name="role"
        label="role"
        type="text" 
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