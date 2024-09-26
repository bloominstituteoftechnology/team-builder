import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const designers = [
    {name: 'Justin Bain', email: 'jbain@undefined', role: 'Superstar'},
    {name: 'Elon Musk', email: 'DaddyElon@undefined.com', role: 'Dad'}
  ]
  const [mates, setMates] = useState(designers)

  function submitIt(yeet) {


    const nameV = document.getElementById('name')
    const emailV = document.getElementById('email')
    const roleV = document.getElementById('role')

    const newMate = {

      name: nameV.value,
      email: emailV.value,
      role: roleV.value

    }


    setMates([...mates, newMate])

    nameV.value = ''
    emailV.value = ''
    roleV.value = ''


  }
    

  return (

    <div className="App">
      
      {mates.map((yeet) => {

        return <p>Name: {yeet.name} Email: {yeet.email} Role: {yeet.role}</p>

      }
      )
      }
      
      <form>
        <label>

          Name:
          <input id="name" type="text" />

        </label>

        <label>

          Email:
          
          <input id="email" type="text" />
        </label>
        <label>
        Role:
          <input id="role" type="text" />
          
        </label>
      </form>
      <button onClick={submitIt}>
        Submit
      </button>
    </div>
  );

}


export default App;
