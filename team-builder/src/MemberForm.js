import React, {useState} from 'react'


const MemberForm = props => {
    const [newPerson, setNewPerson] = useState({
        name: '',
        email: '',
        role: '',
    });

    const handleChanges = event => {
        console.log(newPerson);

        setNewPerson({
            ...newPerson,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(newPerson);
        setNewPerson({ name: '', email: '', role: '' })
    };

    return (
        <form onSubmit={submitForm}>
            <div className='formdiv'>
                <div className='member'>
                    <label htmlFor='title'>Name</label>
                    <input
                        id='name'
                        type='text'
                        name='name'
                        placeholder=' Name Here'
                        onChange={handleChanges}
                        value={newPerson.name}
                    />
                </div>

                <div className='member'>
                    <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            type='email'
                            name='email'
                            placeholder=' email@email.com'
                            onChange={handleChanges}
                            value={newPerson.email}
                        />
                </div>

                <div className='member'>
                    <label htmlFor='note'>Role</label>
                        <input
                            id='Note'
                            type='text'
                            name='role'
                            placeholder=' Describe yourself'
                            onChange={handleChanges}
                            value={newPerson.role}
                        />
                </div>

                <button type='submit'>Add Member</button>
            </div>
        </form>
    )
}

export default MemberForm;