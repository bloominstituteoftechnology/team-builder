import React, {useState, useEffect} from 'react';
import './App.css';

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}
function App() {

  const[teammate, setTeammate] = useState([])
  const[errorText, setErrorText] = useState('')

  const[formValues, setFormValues] = useState(intialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});

  const submitForm = () => {
    const newTeammmate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if(!newTeammmate.name || !newTeammmate.email || !newTeammmate.role){
      setErrorText('Please fill out all fields');
      return;
    }
  }
  }


  return (
    <div className="App">
      <h2>Hello World</h2>
      <TeammateForm
        values= {formValues}
        update= {updateForm}
        submit= {submitForm}
        errorText= {errorText}
        />

      {
        teammate.map(teammate => {
          return
        })
      }
    </div>
  );
}

export default App;
