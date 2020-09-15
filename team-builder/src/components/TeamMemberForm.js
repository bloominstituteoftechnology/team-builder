import React from 'react';

export default function TeamMemberForm(props) {
    const { values, updateForm } = props
    
    //Whenver the default values of any input field is changed, this func will save changes in state. Any change includes typing one letter..
    const onChange = event => {
        // 1a) pull the name of the input from the event object
        // 1b) pull the value of the input from the event object
        const { name, value } = event.target //name and value are properties of event.target
        //update formValues state using callback passed as prop
        updateForm(name, value) //arguments are unpacked at invoked func
    }

    const onSubmit = event => {
        event.preventDefault()
    }

    return (
        <form className='form container'>
            <label htmlFor='fnameInput'>First Name</label>
            <input
                id='fnameInput'
                name="fnameee"
                type='text'
                placeholder='first name'
                maxLength='15'
                value={values.fname}
                onChange={onChange}
            />

            <br />
            <label htmlFor='lnameInput'>Last Name</label>
            <input
                id='lnameInput'
                name="lname"
                type='text'
                placeholder='last name'
                maxLength='15'
                value={values.lname}
                onChange={onChange}
            />

            <br />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                name="email"
                type='email'
                placeholder='enter your email address'
                maxLength='15'
                value={values.email}
                onChange={onChange}
            />

            <br />
            <label htmlFor="strenthSelect">Which activity is your strength? 💪</label>
            <select
                id="strengthSelect"
                name='strengthSelect'
                value={values.strengthSelect}
                onChange={onChange}>
                
                <option value="">-- select strength --</option>
                <option value='1'>Coding</option>
                <option value='2'>Cooking</option>
                <option value='3'>Reading</option>
                <option value='4'>Writing</option>

            </select>

            <div className='submit'>
                <button>submit</button>
            </div>
        </form>
    )
}