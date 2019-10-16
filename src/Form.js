import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";

function Form() {
    const [members, setMembers] = useState({
        name: "",
        email: "",
        role: ""
    });

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember;
        setMembers({ name: "", email: "", role: "" });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" placeholder="Name..." />

            <label htmlFor="email">E-mail</label>
            <input name="email" id="email" type="email" placeholder="E-mail..." />

            <label htmlFor="role">Role</label>
            <select name="role">
                <option selected value="frontendEngineer">
                    Frontend Engineer
                </option>
                <option value="backendEngineer">Backend Engineer</option>
                <option value="designer">Designer</option>
                <option value="dataScientist">Data Scientist</option>
            </select>

            <button type="submit">Add Member</button>
        </form>
    );
}

export default Form;
