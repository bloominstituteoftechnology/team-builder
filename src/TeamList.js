import React from 'react';
import './App.css';

const TeamList = props =>  {
    return (
        <div className='App'>
            {props.people.map(t => (
                <div key={t.id}>
                    <h2>{t.name}</h2>
                    <h2>{t.email}</h2>
                    <h2>{t.role}</h2>
                    </div>
            ))}
        </div>
    )
}

export default TeamList;