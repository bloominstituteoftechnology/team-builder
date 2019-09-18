import React from 'react';
import React, { useState } from 'react';

const initialTeamList = [
    { id: uuid(), name: 'Maryam', age: 20},
    { id: uuid(), name: 'Kiyani', age: 20},
    { id: uuid(), name: 'Mildred', age: 20},
]

function TeamList () {
    const [teamMemberList, setTeamMemberList] = useState(initialTeamList);
}

export default TeamList;