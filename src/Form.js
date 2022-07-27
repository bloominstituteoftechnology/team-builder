import React, { useState, useEffect } from 'react'

export default function Form(props) {
    const { onSubmit, formValues, disabled, inputChange, errors } = props

    return (
        <form onSubmit={onSubmit}>
            {errors.name.length > 0 && <p>{errors.name}</p>}
            <input
                type='text'
                value = {formValues.name}
                name='name'
                placeholder='Name'
                onChange={inputChange}
            />
             { errors.email.length > 0 && <p>{errors.email}</p>}
            <input
                type='email'
                value = {formValues.email}
                name='email'
                placeholder='Email'
                onChange={inputChange}
            />
            {<p>{errors.role}</p>}
            <select name = 'role' value={formValues.role}
            onChange={inputChange}>
                <option value = ''>select a role</option>
                <option value= 'Front End Dev'>Front End Dev</option>
                <option value= 'Back End Dev'>Back End Dev</option>
            </select>
            <button disabled={disabled}>submit</button>
        </form>

    )
}
