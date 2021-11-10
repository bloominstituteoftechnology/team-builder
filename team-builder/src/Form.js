import React, { useState } from 'react';


export default function Form(props){
    const [playerName, setPlayerName] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('submitted')
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        setPlayerName(evt.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='name'
                value={playerName}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}


