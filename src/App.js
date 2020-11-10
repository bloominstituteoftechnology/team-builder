import logo from './logo.svg';
import './App.css';

import React from 'react'; 
import {useState, useEffect} from 'react'; 
import axios from './axios';

import TeamForm from './components/TeamForm';
import TeamMember from './components/TeamMember';

// initial value for the team member details 
const initialMemberValues = { 
  // text inputs
    fname: ''
  , lname: ''
  , email: ''
  , role:  ''   // dropdown
};

function App() {
  // the states -- tracks team members, and details on individual memeber
  const [teamMembers, setTeamMembers] = useState([]); 
  const [formValue, setFormValue] = useState(initialMemberValues); 

  /* FORM VALUE FUNCTION */
  // update form values
  const updateForm = (inputName, inputValue) => 
  { 
    setFormValue({...formValue, [inputName]: inputValue});
  }

  // submit form values
  const submitForm = () => { 
    const newTeamMember = { 
      fname: formValue.fname.trim(),
      lname: formValue.lname.trim(),
      email: formValue.email.trim(),
      role: formValue.role, 
    }

    // prevent action with empty inputs
    if(!newTeamMember.fname || !newTeamMember.lname || !newTeamMember.email || !newTeamMember.role)
      return; 

    // POST previous list to UI
    axios
      .post('sampleapi.com', newTeamMember)
      .then((res) => { 
        setTeamMembers([...teamMembers, newTeamMember]);
        setFormValue(initialMemberValues);
      })
      .catch(err => { 
        console.error(err);
      })

      // clear form
      console.log(formValue.fname);
      // formValue.fname.value('');
      // formValue.lname.value('');
      // formValue.email.value('');
      // formValue.role.value('');
  }

  useEffect(() => { 
    axios.get('sampleapi.com')
      .then((res) => 
      { 
        setTeamMembers(res.data);
      })
  })

  return (
    <div className="App">
        <h1>Team Builder Form</h1>

        <TeamForm
          values={formValue}
          update={updateForm}
          submit={submitForm}
        />

        {teamMembers.map((member) =>
        { 
          return <TeamMember key={member.id} details={member} />;
        })}
    </div>
  );
}

export default App;
