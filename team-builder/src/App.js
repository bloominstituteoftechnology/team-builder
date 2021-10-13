import './App.css';
import React, {useState} from 'react';
import Form from './component/Form';

function App() {
  const [state, setState] = useState([])
 const listMaker = (input) => {
   const newList = {
    name: input.name,
    password: input.password,
    email: input.email
   };
   setState ([...state, newList])
}
  return (
    <div className="App">
      <Form listMaker={listMaker}/>
      {state.map (item => (
          <div>
            <h2>{item.email}</h2>
            <h2>{item.name}</h2>
            <h2>{item.password}</h2>
          
          </div>
      )) }
    </div>
  );
}

export default App;
