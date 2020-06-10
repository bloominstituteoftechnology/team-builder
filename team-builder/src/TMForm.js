import React, {useState} from 'react';
import './App.css'

const TMForm = props => {
    const [member, setMember] = useState( { name:'', email:'', role:''} )

    const handleChanges = event => {
        console.log(event.target.value)
        setMember({...member, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault()
        props.addNewTM(member)
        setMember({name:'', email:'', role:''})
    }

    return (

        <form onSubmit={submitForm} className= 'form'>
           <label htmlFor = 'name'>
                Name:
                <input  id='name' type='text' placeholder='Name' onChange={handleChanges} value={member.name} name= 'name'/>
           </label>

           <label className= 'label' htmlFor='email'>
               Email: 
               <input id='email' type='text' placeholder='Email' onChange={handleChanges} value={member.email} name='email'/>
           </label>

           <label htmlFor='role'>
               Role:
               <input id='role' type='text' placeholder='Role' onChange={handleChanges} value={member.role} name='role'/>
           </label>

           <button className= 'button' type='submit'>Add Team Member</button>
        </form>

    )

}

export default TMForm;







const states = ['alabama', 'florida', 'new york', 'olkahoma'];

const newStates = states.map(state => {
    return <option value = {state}/>
})
console.log(newStates)