import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
border: 1px solid black;
width: 90%;
margin: auto;
margin-top: 15%;
box-shadow:red, 1px,1px,1px,;
h1{
  color: royalBlue;
  text-align: center;
}
input{
  margin:2%;
}
div{
  text-align: center;
  font-weight: 900;
  padding-bottom:2%;
}
`

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
    setFormValues(initialFormValues)
  } 

  return (
    <StyledForm>
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

    </StyledForm>
  );
}

export default App;
