import logo from './logo.svg';
import './App.css';
import React, {useState} from 'React';


const iformData = {username: "", email: "", role: ""};

function App() {
  const[team, setTeam] = useState();
  const[formData, setFormData] = useState(iformData);
  const updateForm = (inputName, inputValue) => {
    setFormData({
      ...formData,
      [inputName]:inputValue
    })
  }
  return ( 
    <div className="App">
    </div>
  );
}

export default App;
