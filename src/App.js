import './App.css';
import React, { useState} from 'react'
import TeamForm from './Components/TeamForm';
import Team from './Components/Team';


const initialFormValues ={
  firstname: '',
  lastname: '',
  email: '',
  role: '',
}


function App() {
  const [teamMember, setTeamMember] =useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)


  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues, 
      [inputName]: inputValue,})
  }

  const submitForm = () =>{
    const newTeamMember= {
      firstname: formValues.firstname.trim(),
      lastname: formValues.lastname.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

  if (!newTeamMember.firstname || !newTeamMember.lastname ||  !newTeamMember.email || !newTeamMember.role) return;

  setTeamMember([newTeamMember, ...teamMember]);

  setFormValues(initialFormValues);

  }




  return (
    <div className="App">
      <TeamForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {teamMember.map((member) =>{
        return <Team key={member.id} details= {member} />
      })}
      
    </div>
  );
}

export default App;
