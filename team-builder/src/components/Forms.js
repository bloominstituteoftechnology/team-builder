import React, {useState} from 'react';


const Forms = ({ addNewTeamMembers }) => {
   
    const [teamMembers, setTeamMembers] = useState({ name: '', email: '', role: '' });

    const handleChanges = event => {
        setTeamMembers({ ...teamMembers, [event.target.name]: event.target.value });
      };

      const submitForm = event => {
        event.preventDefault();
        addNewTeamMembers(teamMembers);
    
        setTeamMembers({ name: '', email: '', role:'' });
      };


    return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Full Name</label>
            <input id='name' placeholder='Enter Full Name Here' type='text' name='name' onChange={handleChanges}
            value={teamMembers.name} />

            <label htmlFor='email'>Email</label>
            <input id='email' placeholder='Enter Email Here' type='text' name='email' onChange={handleChanges}
            value={teamMembers.email} />

            <label htmlFor='role'>Role</label>
            <input id='role' placeholder='Enter Role Here' type='text' name='role' onChange={handleChanges}
            value={teamMembers.role} />

            <button type="submit">Add New Team Member</button>
        </form>
    );
}

export default Forms;