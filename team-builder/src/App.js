import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import Members from "./components/Members";

const App = () => {
    const [members, setMembers] = useState([
        {
            id: 1,
            name: "April",
            email: "april@april.com",
            role: "Lambda Student"
        }
    ]);

    const addNewMemeber = member => {
        const newMember = setMembers([...members, member]);
    };

    return(
        <div className="App">
            <h1>Team Builder</h1>
            <Form addNewMemeber={addNewMemeber} />
            <Members members={members} />
        </div>
    );
  }
  
  export default App;

