import React,{useState} from 'react';
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
  status: ''
}







function App() {
const [members,setMembers]=useState(initialMembers)
const [newMember,setNewMember]=useState(initialValues)


const addMembers = ()=>{
  setMembers([...members,newMember])}

const changeHandle = evt=>{
  const name = evt.target.name
  const value = evt.target.value 
  setNewMember({...newMember,
    [name]:value}
    )
}



  return (
    <div className="App">
      
        {members.map(member=>{
         return <TeamList key={member.id} member={member} />
        })} 
      
      
      <TeamForm addMember={addMembers} changeHandle={changeHandle}  />



      
    </div>
  );
}

export default App;
