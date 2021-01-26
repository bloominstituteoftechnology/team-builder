import {useState} from "react"
import './App.css';
import TeamForm from "./TeamForm"


const initialFormValues = {
    name: " ",
    email: " ",
    role: " "
 }


function App() {
  const [teamMember, setTeamMember] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })

  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
      return
    
    setTeamMember([newTeamMember, ...teamMember])
    setFormValues(initialFormValues)
  }
  
  
    return (

      <div className="App">
        <h1>Team Builder</h1>
        <TeamForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
      </div>
    );
  }

export default App;
