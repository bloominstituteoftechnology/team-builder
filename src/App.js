
import './App.css';
import React, {useState} from 'react';
import Form from './Form'



function App() {
  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }
  
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState({initialFormValues});

  const onSubmit = () => {
    setMembers([formValues, ...members]);
    setFormValues({name:'', email: '', role: ''});
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
      
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            {member.email}, {member.email}, {member.role}
          </div>
        )
      })}
      </div>
  );
}

      


export default App;
