import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Member from './components/Member'

const initialValue = {
  name: '',
  email:'',
  role:''
}

function App() {
  const [teamMember, setTeamMember] = useState([]);
  const [formValue, setFormValue] = useState(initialValue);

  const updateForm = (name,value) => {
    setFormValue({...formValue, [name]:value})
  }
  const submitForm = () => {
   const newMember = {
     name: formValue.name.trim(),
     email:formValue.email.trim(),
     role:formValue.role
   }
   setTeamMember([newMember,...teamMember]);
   setFormValue(initialValue)
  }

  return (
    <div className="App">
      <Form
         values ={formValue}
         update={updateForm}
         submit={submitForm}
      />
      <h2>Team members:</h2>
      {
        teamMember.map((member,idx) => <Member key={idx} details= {member}/>)
      }
    </div>
  );
}

export default App;