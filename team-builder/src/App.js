import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form'
import Turtle from './Turtle';
import axios from '../node_modules/axios'
function App() {

  const initialFormValues = {
    
    name: '',
    email: '',
    role: '',
    id: 0,
  }

  const [teamTurtles, setTeamTurtles] = useState([
    {
      name: 'Leonardo',
      email: 'Leo@turtlezahh.com',
      role: 'Leader',
      id: 0,
    },
    {
      name: 'Raphael',
      email: 'Raph@turtlezahh.com',
      role: 'Weapons',
      id: 1,
    },
    {
      name: 'Donatello',
      email: 'Don@turtlezahh.com',
      role: 'Brains',
      id: 2,
    },
    {
      name: 'Michaelangelo',
      email: 'Angelo@turtlezahh.com',
      role: 'Chef',
      id: 3,
    },

  ])
  const [errorText, setErrorText] = useState("")
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {

    setFormValues({ ...formValues, [inputName]: inputValue });
  }
  const addTurtle = () => {
    const newTurtle = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      id: teamTurtles.length,

    }
    if (!newTurtle.name || !newTurtle.email || !newTurtle.role) {
      setErrorText("You've gotta BE A TURTLE TO ENTER INFO");
      return;
    }
    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
    axios.post(formValues, newTurtle)
      .then(res => {
        setTeamTurtles([res.data, ...teamTurtles]);
        setFormValues(initialFormValues);
        setErrorText("");
      }).catch(err => {
        console.error(err);
      })
    //  d) also on success clear the form
  }
  useEffect(() => {
    axios.get(teamTurtles).then(res => setTeamTurtles(res.data.data))
  }, [])
  






console.log(teamTurtles);

return (
  <div>
    <Form 
    values = {formValues}
    update = {updateForm}
    submit = {addTurtle}
    />
    {
        teamTurtles.map(turtle => {
          return (
            <Turtle key={turtle.id} details={turtle} />
          )
        })
    }
  </div>
);
  }


export default App;
