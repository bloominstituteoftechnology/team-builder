import logo from './logo.svg';
import './App.css';
import Form from "./Form.js"

function App() {

  const [member, setMember] = useState([
    {
      id: 1,
      name: '',
      jobDescription: ''
    }
  ]);

  const addNewMember = note => {
    const newMember = {
      id: Date.now(),
      name: note.name,
      jobDescription: ,
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
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
    </div>
  );
}

export default App;
