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

    const submitHandler = event => {
      event.preventDefault();
      const newCard = {
        ...data,
        id: Date.now()
      };
      props.addNewNote(newCard);
      setData({ title: "", body: "" });
    };

    return (
      <div className="form-container">
          <h1>The Form</h1>
        <form onSubmit={submitHandler}>
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
            <br />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  export default Form;