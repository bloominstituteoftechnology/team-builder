import './App.css';
import { useState } from 'react';
import Form from './Components/Form';

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: "", email: "", role: ""});

  const onSubmit = () => {
    setMembers([values, ...members]);
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value});
  }
  
  return (
    <div className="App">
      <h1>Team Builder App!</h1>
      <Form
      values={values}
      change={onChange}
       submit={onSubmit}
      />

    {members.map((member, id) => {
      <div key={id}>
        {member.email}, {member.name}, {member.role}
      </div>
    })}

    </div>
  );
}

export default App;
