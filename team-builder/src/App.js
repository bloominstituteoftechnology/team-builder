import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import axios from '../src/axios/index';

// Import stylesheets
import './App.css';

function App() {
    // Set initial values
    const initialFormValues = {
        memberName: '',
        memberEmail: '',
        memberRole: '',
    }

    // Set state
    const [member, setMember] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);

    const updateForm = (inputName, inputValue) => {
        setFormValues({ ...formValues, [inputName]: inputValue })
    }

    const submitForm = () => {
        const newMember = {
            memberName: formValues.memberName.trim(),
            memberEmail: formValues.memberEmail.trim(),
            memberRole: formValues.memberRole,
        }
        // form validation
        if (!newMember.memberName || !newMember.memberEmail || !newMember.memberRole) return
        axios
            .post('fakeapi.com', newMember)
            .then()
            .catch(err => {
                debugger;
            })
        setMember([...member, newMember]);

        // Reset form state
        setFormValues(initialFormValues);
    };

    useEffect(() => {
        axios.get('fakeapi.com')
            .then(res => setMember(res.data))
            .catch(err => {
                return
                debugger
            })
    }, []);

	return (
		<>
			<Form
                update={updateForm}
                submit={submitForm}
                values={formValues}
            />
		</>
	);
}

export default App;
