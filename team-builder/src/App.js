import React, {useState} from 'react'
import './App.css';
import Form from './components/Form'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {

  const [ formValues, setFormValues ] = useState();

  return (
    <div className="App">
      <h1>Friend Form</h1>
      <Form />
    </div>
  );
}

export default App;
