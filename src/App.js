import React from 'react';

import { useState } from 'react';
import data from './data';
import Members from './components/Members';
import Form from './components/Form';

import './App.css';

function App() {
const [members, setMembers] = useState(data);

const addNewMember = member => {
    setMembers([...members, member])
}
    return (
        <div className="App">
        <h1>Members</h1>
        <Form addNewMember={addNewMember}/>
        <Members  membersList={members}/>
        </div>
    );
}

export default App;
