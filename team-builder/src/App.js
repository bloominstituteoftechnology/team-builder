import { useState } from 'react'
import TeamMember from './TeamMember'
import TeamMemberForm from './TeamMemberForm'
import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
  language: '',
}

function App() {

  const [teamMember, setTeamMember] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }
  const submitForm = () => {
    const newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      language: formValues.language,
    }
    setTeamMember(teamMember.concat(newTeamMember))
    setFormValues(initialFormValues)
    //   if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.role || !newTeamMember.language) return
    //   axios
    //     .post('fakeapi.com', newTeamMember)
    //     .then(response => {
    //       setTeamMember([newTeamMember, ...teamMember])
    //       setFormValues(initialFormValues)
    //     })
  }
  // useEffect(() => {
  //   axios
  //     .get('fakeapi.com')
  //     .then(response => {
  //       setTeamMember(response.data)
  //     }, [])
  // })
  return (
    <div className='container'>
      <h1>Team Member Sign In</h1>
      <TeamMemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        teamMember.map(member => {
          return (
            <TeamMember key={member.id} details={member} />
          )
        })
      }
    </div>

  );
}

export default App;
