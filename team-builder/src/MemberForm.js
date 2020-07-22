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

    const onSubmit = event => {
        // 9c: first we want to disable the default behavior of the browser on submit - which is refreshing the page, do that by using preventDefault on the event object 
        event.preventDefault(); 
        // 9d: then invoke the submit function we built on App.js, remember that it is passed as a prop named 'submit' 
        submit(); 
    }

    return(
        // step 8: build the form JSX, give it structure and make it syntactically meaningful 
        // step 10: add the onChange and onSubmit functionality to the form and pass props - remember that values is formValues from the top of the App.js function
        // optional step: disable the button until the form is properly filled out by using the disabled key word, with a conditional stating that if the input is not filled out the button is inoperable
        <form className='form-wrapper' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h3>Add a Team Member!</h3>
                <button disabled={!values.username || !values.email || !values.coderType || !values.role}>join</button>
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
                    value={values.username}
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
                    value={values.email}
                    onChange={onChange} />
                </label>

                <label>
                    Pick one word that describes you:
                    <select name='coderType' value={values.coderType} onChange={onChange}>
                        <option value='quirky'>Quirky</option>
                        <option value='sensible'>Sensible</option>
                        <option value='overachiever'>Overachieving</option>
                        <option value='show-off'>Flashy</option>
                        <option value='study-buddy'>Learned</option>
                        <option value='geek'>Nerdy</option>
                    </select>
                </label>

                <label>
                    What's your role?
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value='style-guru'>Style Guru</option>
                        <option value='backend'>Backend Aficiando</option>
                        <option value='frontend'>Frontender</option>
                        <option value='show-off'>Know-it-All</option>
                    </select>
                </label>
            </div>
        </form>
    );
}; 

// step 8b: Now we can head to App.js to pass props to and render the component to the DOM, it won't have functionality yet 

// step 11: We have a working form, but it's all that we're seeing on the page - other than our welcoming information. Now add a Team Member card component that will render the current members onto the screen, we'll do that in TeamMember.js. Build a skeleton of what you want to see and figure out what props need to be passed. 