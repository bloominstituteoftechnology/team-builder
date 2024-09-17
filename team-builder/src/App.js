import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const initialValues = {
  name: '',
  heroName: '',
  power: '',
}

function App() {
const [hero, setHero] = useState([])
const [formValues, setFormValues] = useState(initialValues);
const [error, setError] = useState("")

const change = (evt) => {
  const { value, name } = evt.target
  setFormValues({ ...formValues, [name]: value })
}

const submit = (evt) => {
  evt.preventDefault();
  const newHero = {
name: formValues.name.trim(),
heroName: formValues.heroName.trim(),
power: formValues.power.trim()
  }
  setHero(hero.concat(newHero));
  setFormValues(initialValues);
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className = "creator">
        <h1> Form App </h1>
        {hero.map((hero, idx) => (
          <div key={idx}>
            {hero.name} is a {hero.heroName} with the powers of {hero.power}
            </div>
        ))}
        <form onSubmit={submit}>
      <input 
      value={formValues.name}
      onChange={change}
      name="name"
      type="text"
      placeholder='Enter your name here!' 
      />
      <input 
      value={formValues.heroName}
      onChange={change}
      name="heroName"
      type="text"
      placeholder='Enter your desired hero name here!' 
      />
      <input 
      value={formValues.power}
      onChange={change}
      name="power"
      type="text"
      placeholder='Enter your power(s) here!' 
      />
      <button>Create my Hero!</button>
        </form>
      </div>
    </div>
  );
}

export default App;
