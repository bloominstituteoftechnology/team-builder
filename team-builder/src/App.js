import './App.css';
import {useState} from "react"
import Form from './Form'
import TeamData from './DumData'

const initialFormValues = {
  username: "",
  email: "",
  role: "",
}; 

export default function App() {
  const [workers, setWorkers] = useState(TeamData)
  const[formValues, setFormValues] = useState(initialFormValues)
  const updateForm = (inputName, inputValue) =>{
    setFormValues({
      ...formValues,
      [inputName]:inputValue,
    })
  }

  const submitForm =()=> {
    const newPerson={
    username: formValues.username,
    email: formValues.email,
    role: formValues.role,
    }
    if(!newPerson.username || !newPerson.email || !newPerson.role) return;

    setWorkers([...workers, newPerson])
    setFormValues(initialFormValues)
  };

  return (
    <div className="App">
      <h1>Builder</h1>
      <Form values={formValues}
      update={updateForm}
      submit={submitForm}
      />
    {workers.map((worker)=>{
      return <Form key={worker.id} details={worker} />
    })}
    </div>
  );}

