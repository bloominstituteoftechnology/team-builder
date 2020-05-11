import React, { useState } from 'react';

const EmployeeForm = (props) => {

    const [card, setCard] = useState({
        name: "",
        email: "",
        role: "",
    });

    const handleChanges = event => {
        setCard({...card, [event.target.name]: event.target.value})
    };

    const submitCard = event => {
        event.preventDefault();
        props.addEmployee(card);
        setCard({ name: "", email: "", role: ""})
    };

    return(
        <form onSubmit={submitCard}>
            <label htmlFor="name">First and Last Name:</label>
            <input 
            onChange={handleChanges}
            id="name"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={card.name}
            />
            <label htmlFor="email">Email:</label>
            <input 
            onChange={handleChanges}
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={card.email}
            />
            <label htmlFor="role">Role:</label>
            <input 
            onChange={handleChanges}
            id="role"
            type="text"
            name="role"
            placeholder="Enter Role"
            value={card.role}
            />
            <button type="submit">Add Employee</button>
        </form>
    )
}

export default EmployeeForm;