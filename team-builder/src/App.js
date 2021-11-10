import './App.css';
import React, {useState} from 'react'
import Form from './Components/Form';

function App() {
  
  const initialData = {
    name: '',
    email: '',
    role: ''
  }
  
  const [teamList, setTeamList] = useState([])
  const [values, setValues] = useState(initialData)
  
  const onSubmission = () => {
    setTeamList([values, ...teamList])
    setValues({initialData})
  }

  const onAlter = (name, value) => {
    
    setValues({ ...values, [name]: value})
  }
  
  
  
  return (
    <div className="App">
      Working

      <Form 
        values={values}
        change={onAlter}
        submit={onSubmission}
      />
      {teamList.map((mem, idx) => {
        return (
          <div key={idx}>
            {mem.email}, {mem.name}, {mem.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
