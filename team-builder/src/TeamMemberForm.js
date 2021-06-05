import React from 'react'

export default function TeamMemberForm(props) {
    const { values, update, submit } = props

    const handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        update(inputName, inputValue)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        submit()
    }
    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-teammember-inputs'>
                <lable htmlFor='username'>UserName
                <input
                        id='username'
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                    />
                </lable>
                <label htmlFor='email'>Email
                <input
                        id='email'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                </label>
                <lable htmlFor='role'>Role
                    <select
                        id='role'
                        name='role'
                        value={values.role}
                        onChange={handleChange}>
                        <option value=''>--Select Your Role--</option>
                        <option value='Teacher'>Teacher</option>
                        <option value='Intern'>Intern</option>
                        <option value='Student'>Student</option>
                        <option value='Graduate'>Gradtuate</option>
                    </select>
                </lable>
                <lable htmlFor='language'>Preferred Langrage
                    <select
                        id='language'
                        name='language'
                        value={values.language}
                        onChange={handleChange}>
                        <option value=''>--Choose Your Preferred Language--</option>
                        <option value='CSS'>CSS</option>
                        <option value='HTML'>HTML</option>
                        <option value='JavaScript'>JavaScript</option>
                        <option value='React'>React</option>
                        <option value='Python'>Python</option>
                    </select>
                </lable>
                <div className='submit'>
                    <button>Submit!</button>
                </div>
            </div>
        </form>
    )
}