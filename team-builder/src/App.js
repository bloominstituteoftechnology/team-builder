import logo from './logo.svg';
import './App.css';
import React , {useState , useEffect} from 'react';
import axios from 'axios';
import TeamForm  from './Components/Form';
const initialFormValues = {
  name: '',
  email: '',
  role: '',
}




export default function App() {
  const [teamPlayer , setTeamPlayer ] = useState([]);
  const [formValue, setFormValue] = useState(initialFormValues)
  const [error, setError] = useState('');
  

  const updateForm = (inputName, inputValue) =>{
    setFormValue({ ...formValue, [inputName]: inputValue });
  }
const submitForm = () =>{
  const newTeam = {
    username: formValue.name.trim(),
    email: formValue.email.trim(),
    role: formValue.role.trim
  }

  if (!newTeam.username || !newTeam.email || !newTeam.role){
    setError('Please fill out all the credentials.')
  } else {
    axios.post("fakeapi.com", newTeam)
    .then(res => {
      const teamFromServer = res.data;
      setTeamPlayer([ teamFromServer, ...teamPlayer ]);
      setFormValue(initialFormValues);
    }).catch(err => console.error(err))
    .finally(() => setError(""))
  }
}
useEffect(() => {
  axios.get('fakeapi.com').then(res => setTeamPlayer(res.data))
}, [])

return(
 <div className = 'container'>
   <h1>Team Builder App</h1>
   <h2>{error}</h2>
   <TeamForm 
    values={formValue}
    update={updateForm}
    submit={submitForm}/>


 </div>
)


  }


