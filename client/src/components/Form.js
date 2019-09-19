import React, {useState} from "react";
import styled from "styled-components";

const Header = styled.form`
    width: 100%;
    box-shadow: 0px 20px 10px grey;
    border: 1px solid black;
    padding-bottom: 20px;
`;

const Input = styled.div`
    padding-left: 20px;
`;

const Form = (props) => {
    console.log(`This is props from the Form.js`, props);
    const [member, setMember] = useState({
        name: " ",
        email: " ",
        role: " "
    });
    
    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value });
        console.log(`This is the console.log from the handleChanges`, member);
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: " ", email: " ", role: " " });
    }
    return (
        <Header onSubmit={submitForm}>
            <h1>My Team</h1>
            <label htmlFor="name">Name:</label>
            <input 
                id= "name"
                type= "text"
                name= "name"
                onChange= {handleChanges}
                value={member.name}
            />
            <label htmlFor="email">Email:</label>
            <input 
                id= "email"
                type= "text"
                name= "email"
                onChange= {handleChanges}
                value={member.email}
            />
            <label htmlFor="role">Role:</label>
            <input 
                id= "role"
                type= "text"
                name= "role"
                onChange= {handleChanges}
                value={member.role}
            />
            <button type="submit">Add a team member!</button>
        </Header>
    );
}


export default Form;