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
        <div style={{margin: "3%", marginBottom: "5%"}}>
        <form onSubmit={submitCard}>
            <label htmlFor="name">First and Last Name:</label>
            <input 
            onChange={handleChanges}
            id="name"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={card.name}
            required
            />
            
            <label htmlFor="email">Email:</label>
            
            <input 
            onChange={handleChanges}
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={card.email}
            required
            />
            
            <label htmlFor="role">Role:</label>
            
            <input 
            onChange={handleChanges}
            id="role"
            type="text"
            name="role"
            placeholder="Enter Role"
            value={card.role}
            required
            />
            
            <button type="submit">Add Employee</button>
        </form>
        </div>
    )
}

export default EmployeeForm;