import React, { useState } from 'react';


function Form (props) {

    const {setPeople} = props;


console.log(props)

    const [newFriend, setNewFriend] = useState({Name: "", Occupation: "", Hobby: "" });


    const changeListener = event => {
        setNewFriend({...newFriend, [event.target.name] : event.target.value})
    };


    const submitListener = event => {
        event.preventDefault();
        setPeople(people => [...people, newFriend]);
        // props.setFriend();
        console.log(props.friend)

    };

    return (

        <form onSubmit = {submitListener}>
            <label>Name <input type= "text" name="Name" placeholder="Gunther" value={newFriend.Name} onChange = {changeListener} /></label>
           
            <label> Occupation <input type= "text" name="Occupation" placeholder="Singer" value={newFriend.Occupation} onChange = {changeListener} /></label>
            
            <label> Hobby <input type= "text" name="Hobby" placeholder="Dinosaurs" value={newFriend.Hobby} onChange = {changeListener} /></label>
            
            <button type="submit"> Add Friend </button>

        </form>

    )







}


export default Form;