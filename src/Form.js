import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";

function Form(props) {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: "" });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={member.name}
                onChange={changeHandler}
                required
            />

            <label htmlFor="name">E-mail:</label>
            <input
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                value={member.email}
                onChange={changeHandler}
                required
            />

            <label htmlFor="role">Select a Role</label>
            <select onChange={changeHandler} id="role" name="role" required>
                <option value="">Select a Role</option>
                <option value={member.role1}>Frontend</option>
                <option value={member.role2}>Backend</option>
                <option value={member.role3}>UI Designer</option>
            </select>
            <button type="submit">Submit Member</button>
        </form>
    );
}

export default Form;
