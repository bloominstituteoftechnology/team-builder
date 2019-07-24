import React, {useState} from 'react';
import './App.css';
import Form from "./Components/Form"

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
        <Form
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
      <Form  
        setTeamArray={setTeamArray}
        teamArray={teamArray}
      />
      <div>
      {teamArray.map(member => {
        console.log("member", member)
          return (
            <div key={member.email}>
              <teamMembers
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
