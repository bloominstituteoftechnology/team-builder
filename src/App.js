import { useState } from 'react';
import './App.css';
import TeamForm from './TeamForm';

const initialValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [ teamMember, setTeamMemmber ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialValues);
  const [formErrors, setFormErrors ] = useState('');

  return (
    <div className="container">
      <h1>Team Members</h1>
      <h3 className='error-text'>
        {formErrors}
      </h3>
      

    </div>
  );
}

export default App;
