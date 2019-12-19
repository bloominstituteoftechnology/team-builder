import React, {useState} from "react";
// import ReactDOM from "react-dom";
import Form from './components/form.js';
import Usrs from './components/something.js';
import './App.css';

function App() {
  const {inf, setInf} = useState([
    {
      id: 0,
      username: 'Aaron Andersen',
      email: 'anderseana@tutanota.com',
      role: 'Full-Stack Developer'
    }
]);
const adNwInf = usr => {
  const nwUsr = {
    id: Date.now(),
    username: usr.username,
    email: usr.email,
    role: usr.role
  }
  setInf([...inf, nwUsr]);
    }
  return (
    <div className="App">
      <Form adNwInf={adNwInf}/>
      <Usrs inf={inf}/>
    </div>
  );
}

export default App;
