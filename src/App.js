import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NameCards from './namecards';


function App() {
const [input , setinput] = useState(
{firstname: "", lastname: "", email: "", role: ""}
)
const inputchange = event => {
  setinput({...input, [event.target.name]: event.target.value})
}

const submit = event => {

  event.preventDefalt()
  setinput({firstname: "", lastname: "", email: "", role: ""})
}



  return (
    <div className="App">
     <form onSubmit={event => submit(event)}>
      <label>FirstName: </label>
      <input name="firstname"onChange={event => inputchange(event)} type="text"/> &nbsp;
      <label>LastName: </label>
      <input name="lastname"onChange={event =>inputchange(event)}  type="text"/>&nbsp;
      <label >Email</label>
      <input name="email" onChange={event =>inputchange(event)}  type="text"/>&nbsp;
      <label>Role</label>
      <select name="role" onChange={event =>inputchange(event)}  >
        <option defaultValue="choose">Choose Your Role</option>
        <option value="frontend">Front End</option>
        <option value="backend">Back End</option>
        <option value="fullstack">Full Stack</option>
      </select>
      <button>Submit</button>
     </form>
    </div>
   
  );
}

export default App;
