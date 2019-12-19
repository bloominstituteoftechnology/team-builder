import React, {useState} from 'react';

const Form = props => {
    const [teamMember, setTeamMember] = useState({
    firstname: '',
    lastname: '',
    email: '',
    role: ''
  });

    const handleChanges = event => {
        setTeamMember({
            ...teamMember,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({firstname:'', lastname:'', email:'', role:''})
    };

    return(
        <div className='form-container'>
            <form onSubmit={submitForm}>
                <label>First Name: <input id='firstname' type='text' onChange={handleChanges} name='firstname' placeholder='First Name' value={teamMember.firstname}/></label>
                
                <label>Last Name: <input id='lastname' type='text' onChange={handleChanges} name='lastname' placeholder='Last Name' value={teamMember.lastname}/></label>
               
                <label>Email: <input id='email' type='email' onChange={handleChanges} name='email' placeholder='yourname@yourmail.com' value={teamMember.email}/></label>
                
                <label>Role: <input id='role' type='text' name='role' onChange={handleChanges} placeholder='Dev Role' value={teamMember.role}/></label>
                <button type='submit'>Add Team Member</button>
            </form>
        </div>
        
    )
}

export default Form;