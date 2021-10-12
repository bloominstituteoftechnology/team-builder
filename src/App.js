import React, {useState} from 'react';
import TeammateForm from './Teammate Form'
import Teammate from './Teammate'


const initialFormValues = {
  name: "",
  email: "",
  role: "",
}
function App() {

  const[teammates, setTeammates] = useState([]);
  const[errorText, setErrorText] = useState('')

  const[formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newTeammate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if(!newTeammate.name || !newTeammate.email || !newTeammate.role){
      setErrorText('Please fill out all fields');
      return;
    }
    teammates.push(newTeammate)
    setFormValues(initialFormValues);
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
        teammates.map(item =>{
          return (
            <Teammate key= {item.id} details= {item} />
          )
        })
      }
    </div>
  );
}

export default App;
