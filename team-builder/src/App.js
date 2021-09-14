import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';
// import { Switch, Route, Link } from 'react-router-dom';

import Form from './components/Form';
import Member from './components/Member';

const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

function App() {
  const [formValue, setFormValue] = useState(initialFormValues);
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");
//UPDATE AREA
  const formUpdate = (inputName, inputValue) => {
    setFormValue({ ...formValue, [inputName]: inputValue});
  }
//SUBMIT FUNCTION
  const formSubmit = () => {
    const newMember = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      role: formValue.role
    }
//ERROR SECTION
    if (!newMember.name){
      setError('username required');
    } else if (!newMember.email){
      setError('email required');
    } else if (!newMember.role){
      setError('pick a role please');
    } else {
      setError('');
    }
//SUCCESS SECTION
    if(!error){
      setMembers([ ...members, newMember]);
      setFormValue(initialFormValues);
    }
    // axios.post('fakeapi.com', newMember)
    //   .then(res => {
    //     console.log(res)
    //     const newMemberFromDb = (res.data)
    //     setMembers([ ...members, newMemberFromDb])
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   })

  }

  // useEffect(() => {
  //   axios.get('fakeapi.com')
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>team builder</h1>
          <Form value={formValue} update={formUpdate} submit={formSubmit}/>
        <h4 className="error">{error}</h4>
        <div>
          <h2>members list</h2>
            {members.map(member => {
                return (
                  <Member key={member.id} details={member}/>
                  )
                })
              }
        </div>
        {/* <Link to="/members">Members List</Link> */}
      </header>
        {/* <Route path="/members">
          <Member members={members}/>
        </Route>
        <Route exact path="/">
          <Form value={formValue} update={formUpdate} submit={formSubmit}/>
        </Route> */}
    </div>
  );
}

export default App;
