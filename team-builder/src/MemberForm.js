import React from 'react'; 

export default function MemberForm(props) {
    const { values, update, submit } = props;

    // step 9: implement change and submit handlers for the input and dropdown selections
    const onChange = event => {
        // 9a: extract the name and the value of the input from the event object 
        const { name, value } = event.target;
        // 9b: use the update callback (declared in App.js) - we passed this through props in App.js when rendering the form
        update(name, value);
    }; 

    return(
        // step 8: build the form JSX, give it structure and make it syntactically meaningful 
        <form className='form-wrapper'>
            <div className='form-group submit'>
                <h3>Add a Team Member!</h3>
                <button>join</button>
            </div>

            <div className='form-group input'>
                <h5>Enter Your Information:</h5>
                <label htmlFor='usernameInput'>
                    Username:
                    <input
                    id='usernameInput'
                    name='username'
                    type='text'
                    placeholder='Enter Username'
                    maxLength='25'
                    value={}
                    onChange={onChange} />
                </label>

                <label htmlFor='emailInput'>
                    Email:
                    <input
                    id='emailInput'
                    name='email'
                    type='email'
                    placeholder='Enter Email'
                    maxLength='30'
                    value={}
                    onChange={onChange} />
                </label>

                <label>
                    Select one word that describes you:
                    <select name='coderType' value={} onChange={onChange}>
                        <option value='quirky'>Quirky</option>
                        <option value='sensible'>Smart and Sensible</option>
                        <option value='overachiever'>Overachiever</option>
                        <option value='show-off'>Flashy</option>
                    </select>
                </label>

                <label>
                    Role:
                    <select name='Role' value={} onChange={onChange}>
                        <option value=''>Select Your Role</option>
                        <option value='style-guru'>Style Guru</option>
                        <option value='backend'>Backend Aficiando</option>
                        <option value='frontend'>Frontender</option>
                        <option value='imposter'>Imposter Syndrome-stricken</option>
                    </select>
                </label>
            </div>
        </form>
    );
}; 

// step 8b: Now we can head to App.js and render the component to the DOM, it won't have functionality yet 