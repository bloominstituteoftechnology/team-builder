import React, { useState } from "react";
import TeamForm from "./Form";
import TeamMember from "./TeamMember";

const InitialFormValues = {
    username: '',
    email: '',
    role: '',
  }

  export default function App() {
    const [team, setTeam] = useState([])
  
    const [formValues, setFormValues] = useState(InitialFormValues);
    const [error, setError] = useState("");
  
    const updateForm = (inputName, inputValue) => {
      setFormValues({ ...formValues, [inputName]: inputValue });
    }
  
    const submitForm = () => {
      const newTeam = {
        username: formValues.username.trim(),
        email: formValues.email.trim(),
        role: formValues.role
      }
  
      if (!newTeam.username || !newTeam.email || !newTeam.role) {
        setError("All fields required");
      } else {
        axios.post("fakeapi.com", newTeam)
          .then(res => {
            const teamFromServer = res.data;
            setFriends([ teamFromServer, ...team ]);
            setFormValues(initialFormValues);
          }).catch(err => console.error(err))
          .finally(() => setError(""))
      }
    }
  
    useEffect(() => {
      axios.get('fakeapi.com').then(res => setTeam(res.data))
    }, [])
  
    return (
      <div className='container'>
        <h1>Form App</h1>
        <h2>{error}</h2>
        <TeamForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
  
        {
          team.map(teams => {
            return (
              <TeamMember key={teams.id} details={teams} />
            )
          })
        }
      </div>
    )
  }