import React, { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Data from './configuration/Data.json';

function App() {

  const [members, setMembers] = useState([]);

  const [values, setValues] = useState(Data);

  const update = (inputName, inputValue) => {

    setValues({...values, [inputName]: inputValue});

  };

  const submit = () => {

    const teamMember = {
      name: values.name.trim(),
      email: values.email.trim(),
      role: values.role
    };

    if (!teamMember.name || !teamMember.email || !teamMember.role) return;

    setMembers([...members, teamMember]);

    setValues(Data);

  };

  return (
    <div className='container'>
      <h1>Team Builder</h1>

      <Form
        values={values}
        update={update}
        submit={submit}
      />

      {
        members.map((member, i) => {
          return (
            <Card key={i} data={member} />
          )
        })
      }
    </div>
  )
}

export default App;
