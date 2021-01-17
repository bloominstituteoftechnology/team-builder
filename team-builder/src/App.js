import React, { useState, useEffect } from 'react'
import TeamMember from './components/TeamMember'
import TeamMemberForm from './components/TeamMemberForm'
import './App.css';

import axios from 'axios'

const initialFormValues = {
  aliases: [],
  titles: []

}

const addMember =(inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue});
}

export default function App() {
    const [members, setMembers] = useState({});
    //setting the members to an empty array - b/c that's how the data displays
    const [formValues, setFormValues] = useState(initialFormValues);
    //a slice of state holding all the form values

    const updateForm =(inputName, inputValue) => {
      console.log(inputName, inputValue)//Check the console to see what these are
      setFormValues({...formValues, [inputName]: inputValue});
    }
    //This is a function updating the form, taking the new input key/value pair, rendering the data already there, then adding the newly input info

    const submitForm = () => {  //This is using the api to add data to the form
      const newMember = {
        aliases: formValues.aliases,
        titles: formValues.titles,
      }
    

      axios.post("https://www.anapioficeandfire.com/api/characters", newMember)
      .then((res) => {
        console.log(res)
        setMembers([res.data, ...members])
        setFormValues(initialFormValues) //This is resetting the form to the initial empty values
      })
      .catch((err) => {
        console.err('Error:', err);
      });
    }//End of submitForm bracket

    //API CALL// --*just* getting the data
    useEffect(() => {
      
      axios.get("https://www.anapioficeandfire.com/api/characters")
      .then(res => {
        
        setMembers(res.data)
        console.log("result:", res.data)
      })
      .catch((err) => {
        console.error('Error', err)
      })

    }, []);




    return (
      <div>
        {console.log('success')}
      </div>
    );


}

  



  

