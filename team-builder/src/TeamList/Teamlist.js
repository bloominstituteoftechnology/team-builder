import React, { useState } from 'react';
import uuid from 'uuid';
import Form from './Form';

const initialTeamList = [
    { id: uuid(), name: 'Maryam', email: 'maryam@gmail.com', role: 'developer'},
    { id: uuid(), name: 'Kiyani', email: 'kiyani@gmail.com', role: 'developer'},
    { id: uuid(), name: 'Mildred', email: 'mildred@gmail.com', role: 'developer'},
]

const initialTeamForm = {
    name: '',
    email: '',
    role: '',
}

function TeamList () {
    const [teamMemberList, setTeamMemberList] = useState(initialTeamList);

    const onNameChange = event => {
        set
    }

    return(
       <div>
        <Form />

       {
        teamMemberList.map(team => (
          <p key={team.id}>
            {team.name} email is {team.email} and has a {team.role} role.
          </p>
        ))
       }
       </div>
    );

}

export default TeamList;