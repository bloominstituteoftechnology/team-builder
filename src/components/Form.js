import React, { useState } from 'react';

const Form = props => {
    console.log(props);
    const [data, setData] = useState({
        name: " ",
        email: "",
        role: " ",
    });

    const dataHandler = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    return (
      <div className="form-container">
          <h1>The Form</h1>
        <form>
            <label htmlFor="nameInput">Enter Name: </label>
            <input 
            onChange={event => {setData(dataHandler)}}
            type="text"
            id="nameInput"
            name="name"
            />
            <br />

            <label htmlFor="emailInput">Enter Email: </label>
            <input 
            onChange={event => {setData(dataHandler)}}
            type="text"
            id="emailInput"
            name="email"
            />
            <br />

            <label htmlFor="roleInput">Enter Role: </label>
            <input 
            onChange={event => {setData(dataHandler)}}
            type="text"
            id="roleInput"
            name="role"
            />
        </form>
      </div>
    );
  }
  export default Form;