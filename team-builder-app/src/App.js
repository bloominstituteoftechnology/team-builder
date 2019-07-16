import React, {useState} from 'react';

import './App.css';
// import 'semantic-ui/dist/semantic.min.css';


import TeamMember from "../src/Components/teamMember"
import TeamForm from "./Components/teamForm"

function App() {
  const [teamArray, setTeamArray] = useState([])
  const [memberToEdit, setMemberToEdit] = useState({})

  const editMember = (member) => {
    console.log("member going to edit", member)
    setMemberToEdit(member)
    console.log("app memberToEdit", memberToEdit)
  }

  console.log("app teamArray", teamArray)
  if (teamArray.length === 0) {
    return (
      <div className="App">
        <TeamForm 
          // submitHandler={submitHandler}
          setTeamArray={setTeamArray}
          teamArray={teamArray}
          memberToEdit={memberToEdit}
        />
        <div>
        Add a new team member
      </div>
    </div>
    )
    } else {
    return (
      <div className="App">
      <TeamForm 
        setTeamArray={setTeamArray}
        teamArray={teamArray}
      />
      <div>
      {teamArray.map(member => {
        console.log("member", member)
          return (
            <div key={member.email}>
              <TeamMember
                member={member}
              />
              <button
                onClick={() => editMember(member)}
              >
                edit
              </button>
            </div>
          )
        })}
      </div>
    </div>
    )
  }
}

export default App;


