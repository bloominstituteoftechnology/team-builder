import './App.css';
import React from 'react';
import {useState} from 'react';
import { Background, Header } from './components/Styled';
import Form from './components/Form.js';
import Champion from './components/Members';

const initialValues = {
  name: "",
  champion: "",
  role: "",
}

function App() {

  const [champions, setChampions] = useState([]);
  const [formValues, setFormValues] = useState(initialValues)

  const newChamp = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }
  

  const submitChamp = () => {

    const newChamp = {
      name: formValues.name,
      champion: formValues.champion,
      role: formValues.role
    }

    setChampions([...champions, newChamp])
    setFormValues(initialValues)
  }
  
  // const [userName, setUserName] = useState();
  // const [role, setRole] = useState();




return (
    <Background className="App">


      <Header>League of Legends Team</Header>
      <Form
      values={formValues}
      update={newChamp}
      submit={submitChamp}
      />

      <ul>
        {
          champions.map(champion => {
            return (
              <Champion key={champion.id} details={champion} onSubmit={submitChamp} />
            )
          })
        }
      </ul>


    </Background>

  );
}





export default App;
