import React, {useState} from "react";
// import ReactDOM from "react-dom";
import Form from './components/form';
import Usrs from './components/usrs';
import './App.css';

function App() {
  const {inf} = useState([
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
    username: user.username,
    email: user.email,
    role: user.role
  }
  setInf([...nfo, nwUsr]);
    }
  return (
    <div className="App">
      <Form adNwInf={adNwInf}/>
      <Users inf={inf}/>
    </div>
  );
}

export default App;
