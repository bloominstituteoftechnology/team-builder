import React, {useState} from 'react';
import Form from './components/Form';
import Member from './components/Member';

const initialFormValues = {
  name:'',
  email:'',
  role: ''
};

function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setFormValues(formValues => ({...formValues, [name]: value}));
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (formValues.name && formValues.role && formValues.email){
      const teamMember = {
        id: Date.now(), 
        ...formValues};
      setTeam(team => [...team, teamMember]);
      setFormValues(initialFormValues);
    }
  };

  return (
    <div className="App">
      <Form 
        values={formValues} 
        onInputChange={handleInputChange} 
        onSubmit={handleFormSubmit} 
      />
      {
        team.map(member => <Member key={member.id} member={member} />)
      }
    </div>
  );
}

export default App;