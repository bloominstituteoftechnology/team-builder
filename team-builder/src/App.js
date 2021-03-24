
import './App.css';
import Form from './Form';
import TeamDetails from './TeamDetails';
import uuidv4 from 'uuid/v4'
// import { useEffect } from 'react';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
  }

const teamList = [];

function App() {
  const [teamMember, setTeamMember] = useState(teamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (name, email, role) => {
    setFormValues({...formValues, name: name, email:email, role: role, id: uuidv4});
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    };

  setTeamMember([newMember, ...teamMember]);
  setFormValues(initialFormValues);
  
  }

  // useEffect(() => {
  //   setTeamMember()
  // })


  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form values={formValues} update={updateForm} submit={submitForm}/>
      {teamList.map((person, id) => {
        return <TeamDetails key={id} details={person} />
      })})
    </div>
  );
}

export default App;
