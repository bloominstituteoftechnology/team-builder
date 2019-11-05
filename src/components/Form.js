import React, { useState } from 'react';

const Form = props => {
    console.log("our props", props);
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
      props.addNewCard(newCard);
      setData({name: " ", email: "", role: " " });
    };

    return (
      <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="nameInput">Enter Name: </label>
            <input 
            onChange={dataHandler}
            type="text"
            id="nameInput"
            name="name"
            />
            <br />

            <label htmlFor="emailInput">Enter Email: </label>
            <input 
            onChange={dataHandler}
            type="text"
            id="emailInput"
            name="email"
            />
            <br />

            <label htmlFor="roleInput">Enter Role: </label>
            <input 
            onChange={dataHandler}
            type="text"
            id="roleInput"
            name="role"
            />
            <br />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  export default Form;