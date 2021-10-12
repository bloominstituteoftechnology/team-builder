import React, {useState} from 'react'
import './App.css';
import Form from './components/Form'
import UserList from './components/UserList'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {

  const [ formValues, setFormValues ] = useState();

  return (
    <div>
    <div className="App">
      <h1>Friend Form</h1>
      <Form />
    </div> 
      <UserList />
    </div>
  );
}

export default App;
