import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const nameList = [
  {fName : "Shamir", gender: "male"},
  {fName : "Tiana", gender: "female"},
  {fName : "Debs", gender: "female"}
]

const initialFormValues = { fName: '', gender: ''};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [names, setNames] = useState(nameList);

  const change = (evt)=>{
    const { value, name } = evt.target;
    setFormValues({...formValues, [name]: value})
  }

  const submit = ( evt ) =>{
    evt.preventDefault();
    const newPerson =  {
      fName: formValues.fName.trim(),
      gender: formValues.gender.trim(),
    }
    setNames(names.concat(newPerson))
  } 

  return (
    <div>
      <h1>Simple Form App </h1>
      {names.map((name, idx)=>(
        <div key={idx}>
          {name.fName} is a {name.gender}
        </div>
  ))}
      <form onSubmit={submit}>
        <input value={formValues.fName} onChange={change} name='name' type='text'/>
        <input value={formValues.gender} onChange={change} name='gender' type='text'/>
        <button> Press </button>
      </form>

    </div>
  );
}

export default App;
