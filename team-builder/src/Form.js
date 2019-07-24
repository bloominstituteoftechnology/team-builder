import React, { useState } from 'react';


function Form (props) {


console.log(props)

    const [newFriend, setNewFriend] = useState({});


    const submitListener = event => {
        event.preventDefault();
        props.setFriend();
        console.log(props.friend)

    };


    const changeListener = event => {
        setNewFriend({...newFriend, [event.target.name] : event.target.value})
    };

    return (

        <form onSubmit = {submitListener}>
            <label>Name<input type= "text" name="Name" placeholder="Gunther" onChange = {changeListener} /></label>
            <label>Occupation<input type= "text" name="Occupation" placeholder="Singer" onChange = {changeListener} /></label>
            <label>Hobby<input type= "text" name="Hobby" placeholder="Dinosaurs" onChange = {changeListener} /></label>
            <button>Submit</button>

        </form>

    )







}