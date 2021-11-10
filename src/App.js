import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './Components/form';


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [teamMembersList, setTeamMembersList] = useState([]);
const [formValues, setFormValues] =useState(initialFormValues)

const updateForm = (inputName, inputValue) => {
  setFormValues({ ...formValues, [inputName]: inputValue });
};


const submitForm = e =>{
  const newTeamMember ={
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role.trim()
  }
  setTeamMembersList(teamMembersList.concat(newTeamMember))
  setFormValues({name: '', email: '', role: ''})
};

  return (
    <div className="App">
        <Form
           values={formValues}
           update={updateForm}
           submit={submitForm}
        />
    {teamMembersList.map(user => {
          return (
            <div key={user.id}>
              Name: {user.name},
              Email: {user.email}
              Role: {user.role}
              </div>
          )
        })
      }

    </div>


  );
}