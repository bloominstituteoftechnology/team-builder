
import './App.css';
import TeamForm from './components/TeamForm'
import { useState } from 'react';

const initalFormValues = {
  username: '',
  email: '',
  role: '',

}


function App() {
 const [teamMates, setTeamMates] = useState([])

 const [formValues, setFormValues] = useState(initalFormValues)

 const updateForm = (inputName, inputValue) =>{
   console.log(inputName, inputValue)

   setFormValues({...formValues, [inputName]: inputValue})
 }

 const submitForm = () => {
    const newMem ={
      username: formValues.usrname.trim(),
      email:formValues.email.trim(),
      role: formValues.role,


    }



 }

  

 return (
  <div className= 'container'>
    <h1> Form App</h1>

    <TeamForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
    />


  </div>

 )

};

export default App;
