import React from 'react'

export default function Form(props) {
    const { formValues, setFormValues, setTeamMembers, teamMembers } = props

    const change = (evt) => {
        const { name, value } = evt.target;
      
        setFormValues({...formValues, [name]: value})
      }

      const onSubmit = (evt) => {
        evt.preventDefault()

        const newTeamMember = {
            name: formValues.name,
            email: formValues.email,
            role: formValues.role
        }
            setTeamMembers(teamMembers.concat(newTeamMember));
            setFormValues({name: '', email: '', role: ''})
      }

    return (

        <form onSubmit={onSubmit}>
            <input
                type='text'
                value = {formValues.name}
                name='name'
                placeholder='Name'
                onChange={change}
            />
            <input
                type='email'
                value = {formValues.email}
                name='email'
                placeholder='Email'
                onChange={change}
            />
            <input
                type='text'
                value = {formValues.role}
                name='role'
                placeholder='Role'
                onChange={change}
            />
            <input type='submit' value = 'Fill out your information'/>
        </form>

    )
}