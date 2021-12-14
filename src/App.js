import './App.css';
import React, {useState} from 'react'
import MemberForm from './MemberForm';
import Member from './Member';

const initialFormValues = {
  membername: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const [error, setError] = useState("")

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      membername: formValues.membername.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.membername || !newMember.email || !newMember.role) {
      setError("All fields are required");
    } else {
          setMembers([ newMember, ...members ]);
          setFormValues(initialFormValues);
          setError("")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      Team Members!
      </header>
      <div>
      <MemberForm
              values={formValues}
              update={updateForm}
              submit={submitForm}
      />
      </div>
      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;