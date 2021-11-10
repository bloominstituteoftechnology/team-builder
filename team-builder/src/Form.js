import React, { useState } from 'react';


export default function Form(props){
    const [playerName, setPlayerName] = useState('');
    const [playerData, setPlayerData] = useState({name: '', character: ''});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newTeamList = [ ...props.teamList ]
        newTeamList.push(playerData);
        props.setTeamList(newTeamList);
        console.log(newTeamList);
    }

    const handleChange = (evt) => {
        evt.preventDefault();
        setPlayerData({ ...playerData, [evt.target.name]: evt.target.value })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='name'
                value={playerData.name}
                onChange={handleChange}

            />
            <input 
                type='text'
                name='character'
                value={playerData.character}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}


