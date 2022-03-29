import React, {useState} from 'react';
import './App.css';
import List from './components/List.js';
import Form from './components/Form.js';


const team = [
  {name: 'Gage', email: 'gage@fakecompany.com', role: 'head of development'},
  {name: 'Caitlyn', email: 'caitlyn@fakecompany.com', role: 'secretary'},
  {name: 'Josh', email: 'josh@fakecompany.com', role: 'backend engineer'}, 
  {name: 'Adam', email: 'adam@fakecompany.com', role: 'designer'},
  {name: 'Nick', email: 'nick@fakecompany.com', role: 'mascot'}
]

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState(team);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    team.push(newMember);
    setTeamMembers(team);
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        update={updateForm} 
        submit={submitForm}
      />
      <div className='team-holder'>
      {teamMembers.map(member => {
        return <List members={member}/>
      })}
      </div>
    </div>
  );
}

export default App;
