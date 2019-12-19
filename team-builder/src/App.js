import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from './components/forms';
import Usrs from './components/usrs';
import './App.css';

function App() {
    const [user, setUsers] = useState([
        {
          id: 1,
          name: 'Aaron Andersen',
          email: 'mailinger@mail.com',
          role: 'Full Stack Engineer'
        }
      ]);
    const addNewUser = person => {
        const newPerson = {
            id: Date.now(),
            name: person.name,
            email: person.email,
            role: person.role
        };
        setUsers([...user, newPerson]);
    };
    return (
        <div className="App">
            <Form
                addNewUser={addNewUser}/>
            <Usrs
                user={user}/>
        </div>
    )
}
export default App