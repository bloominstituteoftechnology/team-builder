import React, { useState } from 'react';

const NewPlayer = props => {

    const [player, setPlayer] = useState({name: '', email: '', role: ''});

    const handleChanges = e =>{
        setPlayer({...player, [e.target.name]: e.target.value});
    };

    const submitForm= e => {
        e.preventDefault();
        props.addNewPlayer(player);
        setPlayer({name: '', email: '', role: ''});
        console.log(e.target.value);
    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" onChange{...handleChanges} value= {player.name}/>

            <label htmlFor="email">Email Address:</label>
            <input id="email" type="text" name="email" onChange{...handleChanges} value= {player.email}/>

            <label htmlFor="role">Role:</label>
            <input id="role" type="text" name="role" onChange{...handleChanges} value= {player.role}/>

            <button type="submit"> Add Player </button>



        </form>
    );
};

export default NewPlayer;