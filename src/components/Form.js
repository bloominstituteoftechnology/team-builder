import React, { useState } from 'react';
import '../App.css';


function Form(props) {
    const {setter, data} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
    }

    const handleChange = (event) => {
        setter({...data, [event.target.id]: event.target.value})
    }

    return (
        <div className="form-container">
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>
                    Name:
                    <input id="name" className="form-input" type="text" onChange={((event) => handleChange(event))}></input><br></br>
                </label>
                <label>
                    Email:
                    <input id="email" type="text" className="form-input" onChange={((event) => handleChange(event))}></input><br></br>
                </label>
                <label>
                    Role:
                    <input id="role" type="text" className="form-input" onChange={((event) => handleChange(event))}></input><br></br>
                </label>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default Form;