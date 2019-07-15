import React, {useState} from 'react';
import {Button, Input, Form} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [team, setTeam] = useState([{id:1,name:'Steve'}]);
  const [newMem, setnewMem] = useState({name:''});
  return (
    <div className="App">
      <Form onSubmit={(e) => addNewMember(e)}>
        <Form.Field 
          control={Input}
          label='Name'
          name='name'
          value={newMem.name}
          onChange={(e) => changeHandler(e)}
          width={4}
        />
        <Button type='submit'>Add New Member</Button>
      </Form>
      {team.map(mem => <p key={mem.id}>{mem.id}: {mem.name}</p>)}
    </div>
  );
  function changeHandler(e) {
    setnewMem({[e.target.name]:e.target.value})
  }
  function addNewMember(e) {
    e.preventDefault();
    setTeam([...team, {id:team.length+1,name:newMem.name}]);
    setnewMem({name:''})
  }
}

export default App;
