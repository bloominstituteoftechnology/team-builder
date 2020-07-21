import React from 'react'


export default function form(){


    return(
        <div class='form-container'>
            <form>
                <label htmlFor='name'>
                     <input
                     type='text'
                     placeholder='Enter name'
                     id='name'
                     name='name'
                     maxLength='20'

                     ></input>   
                </label>
                <label htmlFor='email'>
                    <input
                    type='email'
                    placeholder='Enter email'
                    id='email'
                    name='email'
                    ></input>
                </label>
                <label htmlFor='role'>
                    <select
                    id='role'
                    name='role'
                    >
                     <option disabled value=''>Select a role</option> 
                     <option value='backend'>Backend</option> 
                     <option value='frontend'>Frontend</option> 
                     <option value='ios'>IOS</option>       
                    </select>
                </label>

            </form>

        </div>
    )
}