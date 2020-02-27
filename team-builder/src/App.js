import React, { useState } from 'react';
import TeamCard from './components/TeamCard';
import Form from './components/Form';

function App() {

    //Initial value
    const [teamMembers, setTeamMembers] = useState([{
        id: 1,
        name: 'Teague Hannam',
        email: 'real@gmail.com',
        role: 'Full Stack'
    }]);

    //Format for applying card to new member
    const addMember = card => {
        const newCard = {
            id: Date.now(),
            name: card.name,
            email: card.email,
            role: card.role
        };
        setTeamMembers([...teamMembers, newCard]);
    }

    return (
        <div>
            <Form addMember={addMember} />
            <TeamCard teamMembers={teamMembers} />
        </div>
    );
}

export default App;
