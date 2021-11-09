import { useState } from 'react';
import './App.css';
import TeamForm from './TeamForm';


const initialValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [ teamMember, setTeamMember ] = useState({name:'', email:'', role:''});
  const [ formValues, setFormValues ] = useState(initialValues);


const onSubmit = () => {
  setTeamMember({formValues, ...teamMember})
}

const onChange = (name, value) => {
  setFormValues({...formValues, [name]: value})
}

  return (
    <div className="container">
      <h1>Team Members</h1>
      <TeamForm
        values={formValues}
        change={onChange}
        submit={onSubmit}
      />
    </div>
  );
}

export default App;
