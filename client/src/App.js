import React, {useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [team, setTeam] = useState([{id:1,email:'steve@dave.com',name:'Steve',role:'Front End Developer'}]);
  const [newMem, setnewMem] = useState({email:'',name:'',role:''});
  return (
    <div className="App">
      <Form onSubmit={(e) => addNewMember(e)}>
        <Form.Input
          // control={Input}
          label='Name'
          name='name'
          value={newMem.name}
          onChange={(e) => changeHandler(e)}
          width={4}
        />
        <Form.Input
          // control={Input}
          label='Email'
          name='email'
          value={newMem.email}
          onChange={(e) => changeHandler(e)}
          width={4}
        />
        <Form.Input
          // control={Input}
          label='Role'
          name='role'
          value={newMem.role}
          onChange={(e) => changeHandler(e)}
          width={4}
        />
        <Button type='submit'>Add New Member</Button>
      </Form>
      {team.map(mem => <p key={mem.id}>{mem.id}: {mem.name}</p>)}
    </div>
  );
  function changeHandler(e) {
    setnewMem({...newMem, [e.target.name]:e.target.value});
  }
  function addNewMember(e) {
    e.preventDefault();
    setTeam([...team, {id:team.length+1,name:newMem.name}]);
    setnewMem({email:'',name:'',role:''})
  }
}

export default App;
