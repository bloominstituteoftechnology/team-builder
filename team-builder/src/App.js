import React, { useState, useEffect } from 'react'
import TeamMember from './components/TeamMember'
import TeamMemberForm from './components/TeamMemberForm'
import './App.css';

import axios from 'axios'

const initialFormValues = {
  name: "" , //Name of House
  region: "" 

}

export default function App() {
    const [members, setMembers] = useState([]);
    //setting the members to an empty array - b/c that's how the data displays
    const [formValues, setFormValues] = useState(initialFormValues);
    //a slice of state holding all the form values

    const updateForm =(inputName, inputValue) => {
      console.log("Update Form is Working: ", inputName, inputValue)//Check the console to see what these are
      setFormValues({...formValues, [inputName]: inputValue});
    }
    //This is a function updating the form, taking the new input key/value pair, rendering the data already there, then adding the newly input info

    const submitForm = () => {  //This is using the api to add data to the form
      const newMember = {
        name: formValues.name.trim(),
        region: formValues.region.trim(),
        
      }
    
      if (!newMember.name || !newMember.region) return;


      axios.post("https://www.anapioficeandfire.com/api/houses", newMember)
      .then((res) => {
        console.log(res)
        setMembers([res.data, ...members])
        setFormValues(initialFormValues) //This is resetting the form to the initial empty values
      })
      .catch((err) => {
        console.log('Error:', err);
      });
    }//End of submitForm bracket

    //API CALL// --*just* getting the data
    useEffect(() => {
      
      axios.get("https://www.anapioficeandfire.com/api/houses")
      .then(res => {
        
        setMembers(res.data)
        console.log("result:", res.data)
      })
      .catch((err) => {
        console.log('Error', err)
      })

    }, []);




    return (
      <div className="container">
        <h1>Team Form</h1>

        <TeamMemberForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />

        {
        members.map(kingdom => {
          return(
            <TeamMember key={kingdom.id} details={kingdom}/>
          )
        })
      }
    </div>
  );
}

  



  

