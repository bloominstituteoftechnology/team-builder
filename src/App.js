
import './App.css';
import React, {useState} from 'react';
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState({initialFormValues})
  const onSubmit = () => {
    setMembers([formValues, ...members])
  }
  const onChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }
  return (
    <div className="App">
      <h1>Team Form</h1>
      <Form
      values={formValues}
      change={onChange}
      submit={onSubmit}

      />
    </div>
  );
}

export default App;
