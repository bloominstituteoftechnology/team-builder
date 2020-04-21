import React,{useState} from 'react';
import styled from 'styled-components';
import TeamList from './coponents/TeamList'
import TeamForm from './coponents/TeamForm'
import './App.css';

const initialMembers =
[ {
  id:0,
  fname:'Blake',
  lname:'Thompson',
  position:'QB',
  status:'Active'

},]

const initialValues = {
  id:'',
  fname: '',
  lname: '',
  position:'',
  status: 'Inactive',
  tang: {
    injury:false,
    stable:false,
    ready:false,

  }
}







function App() {
const [members,setMembers]=useState(initialMembers)
const [newMember,setNewMember]=useState(initialValues)


const addMembers = e=>{
  e.preventDefault()
  setMembers([...members,newMember])
  setNewMember(initialValues)
}

const changeHandle = evt=>{
  const name = evt.target.name
  const value = evt.target.value 
  setNewMember({...newMember,
    [name]:value}
    )
  
}

const ifChecked = evt=>{
  const name = evt.target.name;
  const value = evt.target.checked;
  setNewMember({...newMember,
  tang:{...newMember.tang,
  [name]:value,}
})

}

const Div = styled.div `
  display:flex;
  
  background:orange;
  width:60%;
  margin:4% auto;


`



  return (
    <div className="App">
      <TeamForm newMember={newMember} addMember={addMembers} changeHandle={changeHandle} checked={ifChecked}  />

      
        <Div>
          {members.map(member=>{
           return <TeamList key={member.id} member={member} />
          })} 
        </Div>
      
      
      



      
    </div>
  );
}

export default App;
