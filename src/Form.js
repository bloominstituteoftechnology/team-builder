import React, {useState} from 'react';


const Form = props => {

const [teamMember, setTeamMember] = useState({
    id:Date.now(),
    name:"",
    email:"",
    role:""
});
const submitHandler = event => {
    event.preventDefault();
    console.log("From props->",props);
    props.addTeamMember(teamMember);
    setTeamMember({id:Date.now(),name:"",email:"",role:""});

    
}


return(
    <div>
        <p>Form is here</p>
    <form 
    onSubmit={submitHandler}
    >
        <input label="name" />
        <input label="email" />
        <input label="role" />
    </form>
    
    </div>
);

}

export default Form; 