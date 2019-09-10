import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

function App() {

  const [team, setTeam] = useState([]);

  const [memberEdit, memberToEdit] = useState({
    name:'',
    email: '',
    role: ''
  });

  const editMember = memberAdd => {
    memberToEdit(memberAdd);
    console.log(memberAdd);
  }

  return (
    <div className="App">
      {team.map((element,index) => {
        console.log(element);
        return (
          <div className="App">
            <p>{element.name}</p>
            <p>{element.email}</p>
            <p>{element.role}</p>

            <button>Edit Member</button>
          </div>
        )
      })}

      <Form team={team} setTeam={setTeam} memberEdit={memberEdit} />
    </div>
  );

}
export default App;
