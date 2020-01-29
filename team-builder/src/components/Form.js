import React, {useState} from 'react';

const Form = props => {
    const [member, setMember] = useState({
        Name: '',
        Email: '',
        Role: ''
    });
    

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value})
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({Name: '', Email: '', Role: ''})  
    };


return (
    <form onSubmit={submitForm}>
    <div>
        <label htmlFor='name'>Full Name</label>
        <input id='name' type='text' name='name' placeholder='Full Name' onChange={handleChanges} />
    </div>

    <div>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' placeholder='email address' onChange={handleChanges} />
    </div>

    <div>
        <label htmlFor='select'>Role</label>
         <select onChange = {handleChanges} 
            id='role'>
                <option/>
                <option>UI Designer</option>
                <option>Frontend Engineer</option>
                <option>Backend Engineer</option>
                <option>Data Scientist</option>
            </select>
    </div>
        

        <button type='submit'>Add Member</button>
    </form>
)
};

export default Form;