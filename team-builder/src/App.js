import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
// import logo from './logo.svg';
import './App.css';
//my imports\\
import TeamForm from './components/team-form'



//start of my work\\

const initialMembersList = [{
  id: uuid(),
  name: 'Reee6',
  email: 'reee@ree.com',
  role: 'Student',

},]

const initialFormValues = 
  {
  name: '',
  email: '',
  role: '',
  }


// end of declared efault values for team member state\\

function App() {
//start of useState for team member list\\
const [members, setMembers] = useState(initialMembersList)
//start of useState for form values\\
const [formValues, setFormValues] = useState(initialFormValues)

//start of ON functions\\
  const onInputChange = evt => {

  const { name } = evt.target
  const { value } = evt.target
  setFormValues({...formValues, [name]: value})
}
const onSubmit = evt => {
  //preventing browser from reloading
  evt.preventDefault()
//preventing forms from being submitted if strings are empty
  if (
    !formValues.name.trim() ||
    !formValues.email.trim() ||
    !formValues.role.trim() 
  ) {
return
}
// end of prevention trim



//start of new member\\
const newMember = { ...formValues, id: uuid()}
setMembers([ newMember, ...members])
setFormValues(initialFormValues)
}

/* commenting this out for now since i was too lazy to make an export/new file lol */

//start of team member component\\
// function TeamMember(props) {
//   const {details} = props
//   if (!details) {
//     return <h3> working on member details </h3>

//   }
// }
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


// adding form components + props\\
  return (
    <div className="App">
      <header className="App-header"> 
      <h1> Team List </h1>
      
    
      <TeamForm
          values = {formValues}
          onInputChange = {onInputChange}
          onSubmit = {onSubmit}
          />

          {
            members.map(member => {
              return (
                // <TeamMember key={friend.id} details={friend} />
                <div key = {member.id}> 
                      <h3> name: {member.name}</h3>
                      <p> email: {member.email}</p>
                      <p> role: {member.role}</p>

                </div>
                
              )
            })
          }
 </header>

    </div>
  );
}

export default App;
