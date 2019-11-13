import React, { useState } from "react";

const PeopleForm = props => {
    const [people, setPeople] = useState({ name: "", email: "", role: "" });

    const handleChanges = e => {
        setPeople({ ...people, [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewPeople(people);
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Name</label>
            <input
                id="title"
                type="text"
                name="name"
                onChange={handleChanges}
                value={people.name}
                required
            />
            <label htmlFor="people">Email</label>
            <input id="people" name="email" value={people.body} onChange={handleChanges} required />
            <label htmlFor="role">Role</label>
            <select id="role" name="role" value={people.role} onChange={handleChanges} required>
                <option value="">--Please choose an option--</option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Left-End">Left-End</option>
                <option value="Right-End">Right-End</option>
            </select>
            <button type="submit">Add Person</button>
        </form>
    );
};
export default PeopleForm;