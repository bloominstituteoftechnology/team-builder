import React , {useState}from 'react';
import ReactDOM from 'react-dom';
import MemberForm from './App';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


function Form () {
  const [members , setMember] = useState([
    {
    id:1,
    Name:"Lakendria",
    Email:"kendra939@gmail.com",
    Role:"react web developer"
  
  },
  {
    id:2,
    Name:"Lexie J",
    Email:"jiang123@gmail.com",
    Role:"Lambda TL"
  
  },
  {
    id:3,
    Name:"Brandon",
    Email:"brandon4273@gmail.com",
    Role:"Lambda TL "
  
  }



]);
const addNewMember = (formData) => {
  const newMember = {
    id: Date.now(),
    Name: formData.name,
    Email: formData.email,
    Role: formData.role
  };
  setMember([...members , newMember]);
};

return (
<div className ="App">
  <h1>My Members</h1>
  <MemberForm addNewMember = {addNewMember}/>
  <App member ={members} />
</div>
);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();