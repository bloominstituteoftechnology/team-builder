import React, {useState} from 'react';

function NewForms(props) {

        const [teamMembers, setTeamMembers] = useState([
            {
            id: 1,
            name: "",
            email: "",
            role: ""
            }
        ]);

        const handleChanges = e => {
            setTeamMembers({
                ...teamMembers, [e.target.name]: e.target.value
            });
            console.log(teamMembers);
        };
        const submitForm = e => {
            e.preventDefault();
            props.addNewInfo(teamMembers);
            setTeamMembers({name: "", email: "", role: ""})
        }; 
        return (
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" onChange={handleChanges} placeholder= "name"/>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" onChange={handleChanges} placeholder= "email"/>
                <label htmlFor="role">Role</label>
                <input id="text" type="text" name="role" onChange={handleChanges} placeholder= "role"/> 
            </form>
        );
};
export default NewForms;