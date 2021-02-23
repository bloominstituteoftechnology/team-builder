
import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './Form'

const initialFormValue =  {
  name: '',
  email: '',
  roll: '',
}

function App() {

  const [friend, setFriend] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValue)
  const updateForm = (inputName , inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () =>{
    const newFriend ={
      friendName: formValues.friendName.trim(),
      email: formValues.email.trim(),
      roll: formValues.roll.trim(),
    }
    setFriend([...friend, newFriend])
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
