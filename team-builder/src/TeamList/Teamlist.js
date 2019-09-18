import React, { useState } from 'react';
import uuid from 'uuid';
import Form from './Form';

const initialTeamList = [
    { id: uuid(), name: 'Maryam', email: 'maryam@gmail.com', role: 'developer'},
    { id: uuid(), name: 'Kiyani', email: 'kiyani@gmail.com', role: 'developer'},
    { id: uuid(), name: 'Mildred', email: 'mildred@gmail.com', role: 'developer'},
]

function TeamList () {
    const [teamMemberList, setTeamMemberList] = useState(initialTeamList);

    return(
       <Form />
    );

}

export default TeamList;