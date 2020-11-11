
import {useState} from 'react-dom'
import './App.css';
import CharacterForm from './Form';

//this will be the form 'template'
const initialFormValues = {
  name:"",
  type:"",
  position:""
}




function App() {

  return (
    <div className="App">
      <CharacterForm></CharacterForm>
    </div>
  );
}

export default App;
