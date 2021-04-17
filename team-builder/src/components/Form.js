import React from 'react';

// Import stylesheet
import './Form.css';

function Form(props) {
    const { update, submit, values } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const submitForm = evt => {
        evt.preventDefault();
        submit()
    };

	return (
	    <>
		<form onSubmit={submitForm}>
            <label>Your Name Please
                <input
                    type='text'
                    value={values.memberName}
                    placeholder='Type it here if you will'
                    onChange={onChange}
                    name='memberName'
                />
            </label>
            <label>And Your E-mail While We're Here
                <input
                    type='email'
                    value={values.memberEmail}
                    placeholder='An E-mail to Contact You?'
                    onChange={onChange}
                    name='memberEmail'
                />
            </label>
            <label>What Exactly do You do Here?
                <select onChange={onChange} name='memberRole'>
                    <option value='ninja'>Ninja</option>
                    <option value='spy'>Spy</option>
                    <option value='mage'>Mage</option>
                    <option value='topSecret'>Top Secret</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
        </>
	);
}

export default Form;
