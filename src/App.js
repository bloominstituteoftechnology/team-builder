import React, { useState } from "react";
import logo from "./logo.svg";
import Form from "./Form";
import Member from "./Member";

import "./App.css";

function App() {
    const [members, setMembers] = useState([]);
    const addNewMember = person => {
        setMembers([...members, person]);
    };

    return (
        <div className="App">
            <h1>Our Team</h1>
            <Form addNewMember={addNewMember} />
            <Member memberList={members} />
        </div>
    );
}

export default App;
