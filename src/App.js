import { useState } from 'react';
import './App.css';

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
    <div className="App">

    </div>
  );
}

export default App;
