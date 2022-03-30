import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Form from './Form';



function App() {
  const [values, setValues] = useState({name: '', email: '', role: ''});
  const [members, setMembers] = useState([]);

  const onSubmit = () => {
    setMembers([values, ...members]);
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value})
  }

  

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form values={values} onSubmit={onSubmit} onChange={onChange} />
      {members.map((member, idx) => {
    return <div key={idx}>{member.name}{member.email}{member.role}</div>
  })}
    </div>
  );
}

export default App;
