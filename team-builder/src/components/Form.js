import React from 'react';


const EmployeeForm = props => {
    const [FirstName, setFirstName] = React.useState('');
    const [LastName, setLastName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Role, setRole] = React.useState('');

    const handleFirstName = event => setFirstName(event.target.value);
    const handleLastName = event => setLastName(event.target.value);
    const handleEmail = event => setEmail(event.target.value);
    const handleRole = event => setRole(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
    }


return(
    <form onSubmit={handleSubmit}>
        <input
        onChange={handleFirstName}
        type='text'
        name='FirstName'
        value={FirstName}
        plaeholder='First Name' 
        />
        <input
        onChange={handleLastName}
        type='text'
        name='LastName'
        value={LastName}
        plaeholder='Last Name'
        />
        <input
        onChange={handleEmail}
        type='text'
        name='Email'
        value={Email}
        plaeholder='Email'
        />
        <input 
        onChange={handleRole}
        type='text'
        name='Role'
        value={Role}
        plaeholder="Role"
        />

    </form>
    );
};

export default EmployeeForm;