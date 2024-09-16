import React from 'react';
// import Character from './Character'

export default function CharacterForm(props){
    const { formValues, change, submit } = props; 
    //passing props from App ^^
    
    return(
    <div>
        <form onSubmit={submit}>
            <label>
                Name:
                <input type='text' name='name' value={formValues.name} placeholder="Character Name" onChange={change}/> 
            </label>
            <br></br>
            <label>
                Position:
                <input type='text' name='position' value ={formValues.position} placeholder="Position of Character" onChange={change}/>
            </label>
            <br></br>
            <label>
                Type:
                <input type='text' name='type' value ={formValues.type} placeholder="Dps? Support? Tank?" onChange={change}/>
            </label>
            <br></br>
            <button type='submit'>Add character to the team</button>
        </form>
    </div>
    )
};