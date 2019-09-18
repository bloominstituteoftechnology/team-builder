import React, { useState } from 'react';
import uuid from 'uuid';

const initialTeamList = [
    { id: uuid(), name: 'Maryam', email: 'maryam@gmail.com' role: 'developer'},
    { id: uuid(), name: 'Kiyani', email: 'kiyani@gmail.com' role: 'developer'},
    { id: uuid(), name: 'Mildred',email: 'mildred@gmail.com' role: 'developer'},
]

function TeamList () {
    const [teamMemberList, setTeamMemberList] = useState(initialTeamList);
}

export default TeamList;