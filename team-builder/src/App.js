import React, { useState } from 'react';
import './App.css';
import Team from './Components/Team';
import TeamForm from './Components/TeamForm';


function App() {
    const [ teamList, setTeamList ] = useState([
        {
            id: '0',
            name: 'Slyce Nade Brelson',
            email: 'PrincessPansy@gmail.com',
            role: 'Gate Keeper of the Slack Channels',

        },
        {
            id: '1',
            name: 'Lammy Sittle',
            email: 'FriedHair@gmail.com',
            role: 'Meme Police',

        },
        {
            id: '2',
            name: 'Stoberto Beston',
            email: 'keyboardwarrior@gmail.com',
            role: 'Right Winger',
        },
        {
            id: '3',
            name: 'Kecisva Jise',
            email: 'dontusemynotes@gmail.com',
            role: 'Unprofessional',
        }
    ]);

    const addNewMember = member => {
        const newMember = {
            id: Date.now(),
            name: member.name,
            email: member.email,
            role: member.role,

        };
        setTeamList([ ...teamList, newMember]);
    }

    const [memberToEdit, setMemberToEdit] = useState('');

    const addMemberToEdit = member => {
        setMemberToEdit(member);
    }

    const editMember = member => {
        let restOfList = teamList.filter(person => person.id !== member.id);
        restOfList.unshift(member);
        setTeamList(restOfList);
        setMemberToEdit('');

    }

    return (
        <div className="App">
            <div className="heading">
                <h1>Team Memebers!</h1>
            </div>

            <TeamForm addNewMember={addNewMember} memberToEdit={memberToEdit}
                            editMember={editMember}/>
            <Team teamMembers={teamList} addMemberToEdit={addMemberToEdit}/>
        </div>
    );
}

export default App;