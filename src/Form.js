import React, { useState } from 'react';
import { render } from 'react-dom';


//Come back here for position after finished with text inputs
const initialFormValues = {name: '', email: ''};
export default function Form(props){

const [teamMembers, setTeamMembers] = useState(props.teamMembers);
const [formValues, setFormValues] = useState(initialFormValues);


const change = (event) => {
    console.log(event.target.value, event.target.name);
    const { value, name } = event.target;
    setFormValues({...formValues, [name]: value});
}

const submit = (event) => {
    event.preventDefault();
    const newTeamMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim()
    }
    console.log(newTeamMember);
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
}

console.log(teamMembers);

return (
    <div>
        <form onSubmit={submit}>
            <label>Name: 
                <input 
                    value={formValues.name}
                    onChange={change}
                    name='name'
                    type='text'
                />
            </label>
            <label>Email: 
                <input 
                    value={formValues.email}
                    onChange={change}
                    name='email'
                    type='text'
                />
            </label>
            <label>Position:
                <select value='' name='position' onChange={change}>
                    <option>--Your Position--</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
        {teamMembers.map((member, index) => (
            <>
                <h1>List of Team Members</h1>
                <div>{`Name: ${member.name}, Email: ${member.email}`}</div>
            </>
        ))}
    </div>
)

}