import React, { useState } from "react";


const Form = props => {
    const [members, setMembers] = useState([
        {
            name: "",
            email: "",
            role: ""
        }
    ]);

    const handleChanges = event => {
        setMembers({...members, [event.target.name]: event.target.value });
    };

    const submitHandler = event => {
        event.preventDefault();
        const newMember = {
            ...members,
            id: Date.now()
        };
        props.addNewMember(newMember);
        console.assert(newMember);
        setMembers({name: "", email: "", role: ""});
        };

        return(
            <div>
                <form onSubmit= {submitHandler}>
                    <label htmlFor="name">Name: </label>
                    <input 
                        onChange= {handleChanges}
                        id="name"
                        name="name"
                        value={members.name}
                    />

                    <label htmlFor="email">Email: </label>
                    <input 
                        onChange= {handleChanges}
                        id= "email"
                        name= "email"
                        value= {members.email} 
                    />

                    <label htmlFor="role">Role: </label>
                    <input 
                        onChange= {handleChanges}
                        id="role"
                        name="role"
                        value={members.role}
                    />
                    <button type="submit">Add New Member</button>
                </form>
            </div>
        );
    };


export default Form;