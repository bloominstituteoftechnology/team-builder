import React, {useState} from "react";
// import ReactDOM from "react-dom";
import Form from './components/form.js';
import Usrs from './components/something.js';
import './App.css';

function App() {
const {things, setThings} = useState([]);

return (
  <div className="App">    
    <Form 
        things={things}
        setThings={setThings}/>
    
    <Usrs things={things}/>
  </div>
);
}

export default App;
