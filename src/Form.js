import React, { useState } from 'react';
import { render } from 'react-dom';


//Come back here for position after finished with text inputs
const initialFormValues = {name: '', email: ''};
export default function Form(props){

const [teamMembers, setTeamMembers] = useState(props);
const [formValues, setFormValues] = useState(initialFormValues);

const change = (event) => {
    console.log(event.target.value, event.target.name);
    const { value, name } = event.target;
    setFormValues({...formValues, [name]: value});
}

console.log(teamMembers);

return (
    <div>
        <form>
            
            <input 
                value={formValues.name}
                onChange={change}
                name='name'
                type='text'
            />
            <input 
                value={formValues.email}
                onChange={change}
                name='email'
                type='text'
            />

        </form>
    </div>
)

}