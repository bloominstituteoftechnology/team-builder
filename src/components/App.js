import React, { useState, useEffect } from 'react';
import TeamMember from './TeamMember'
import Form from './Form';
import axios from '../axios/index';

const initialFormValues = {
    name: '',
    email: '',
    role: '',
}

export default function App() {
    const [teamMembers, setTeamMembers] = useState([]);

    const [formValues, setFormValues] = useState(initialFormValues);

    const updateForm = (inputName, inputValue) => {
        setFormValues({
            ...formValues,
            [inputName]: inputValue,
        });
    };

    const submitForm = () => {
        const newTeamMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role,
        };

        if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return;

        axios
            .post('apis.com', newTeamMember)
            .then((res) => {
                setTeamMembers([...teamMembers, newTeamMember]);
                //  d) also on success clear the form
                setFormValues(initialFormValues);
            })
            .catch(err => {
                console.log(err, 'something broke')
            })
    };

    useEffect(() => {
        axios.get('apix.com').then(res => setTeamMembers(res.data))
    }, [])


    return (
        <div className='container'>
            <h1>Team Member App</h1>
            <Form
                values={formValues}
                update={updateForm}
                submit={submitForm}
            />

            {
                teamMembers.map(teamMember => {
                    return (
                        <TeamMember key={teamMember.id} details={teamMember} />
                    )
                })
            }
        </div>

    )

};
