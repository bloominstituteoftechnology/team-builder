import React, {useState} from 'react';
import {Button,Form,Segment,Grid,Radio} from 'semantic-ui-react';
import TeamCard from './TeamCard';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [team, setTeam] = useState([
    {id:1,email:'steve@dave.com',name:'Steve',role:'Front End Developer'},
    {id:2,email:'ricky@dave.com',name:'Ricky',role:'Back End Developer'}
  ]);
  const [newMem, setNewMem] = useState({email:'',name:'',role:'UX Designer'});
  const [memberToEdit, setMemberToEdit] = useState({email:'',name:'',role:''});
  const [editNum, setEditNum] = useState(0);
  
  return (
    <div className="App">
        <Segment placeholder>
          <Grid columns={2} stackable>
            <Grid.Column>
              <Form onSubmit={(e) => addNewMember(e)}>
                <Form.Input
                  label='Name'
                  name='name'
                  value={newMem.name}
                  onChange={(e) => changeHandler(e)}
                />
                <Form.Input
                  label='Email'
                  name='email'
                  value={newMem.email}
                  onChange={(e) => changeHandler(e)}
                />

                <Form.Field
                    control={Radio}
                    onChange={radioHandler}
                    checked={newMem.role === 'UX Designer'}
                    label='UX Designer'
                    value='UX Designer'
                />
                <Form.Field
                    control={Radio}
                    onChange={radioHandler}
                    checked={newMem.role === 'Front End Developer'}
                    label='Front End Developer'
                    value='Front End Developer'
                />
                <Form.Field
                    control={Radio}
                    onChange={radioHandler}
                    checked={newMem.role === 'Back End Developer'}
                    label='Back End Developer'
                    value='Back End Developer'
                />

                <Button color='green' type='submit'>Add New Member</Button>
              </Form>
            </Grid.Column>

            <Grid.Column>
              {team.map(mem => 
                <TeamCard 
                  {...mem} 
                  editHandler={editHandler}
                  editMember={editMember} 
                  editNum={editNum} 
                  key={mem.id}
                  memberToEdit={memberToEdit}
                  removeMember={removeMember}
                  toggleEdit={toggleEdit}
                />
              )}
            </Grid.Column>
          </Grid>
        </Segment>
    </div>
  );

  function changeHandler(e) {
    setNewMem({...newMem, [e.target.name]:e.target.value});
  }

  function radioHandler(e, {value}) {
    setNewMem({...newMem, role:value});
  }

  function editHandler(e) {
    setMemberToEdit({...memberToEdit, [e.target.name]:e.target.value});
  }

  function addNewMember(e) {
    e.preventDefault();
    setTeam([...team, {...newMem, id:team.length+1}]);
    setNewMem({email:'',name:'',role:''})
  }

  function editMember(e, memberToEdit) {
    e.preventDefault();
    let editedTeam = team.map(mem => mem.id === memberToEdit.id ? memberToEdit : mem);
    setTeam(editedTeam);
    setEditNum(0);
  }

  function removeMember(e, id) {
    e.preventDefault();
    let newTeam = team.filter(mem => mem.id !== id);
    setTeam(newTeam);
    setEditNum(0);
  }

  function toggleEdit(id) {
    editNum === id ? setEditNum() : setEditNum(id);
    let thisMem = team.filter(mem => mem.id === id)[0];
    setMemberToEdit(thisMem);
  }
}

export default App;
