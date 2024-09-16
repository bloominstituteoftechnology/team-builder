import React from 'react'

export default function TeamForm(props){

const {values, update, submit} = props

const onchange = e => {
    const name = e.target.name
    const value = e.target.value

    update(name, value);

}
const onSubmit = e =>{
    console.log('hello')
    e.preventDefault()

    submit()
}

return (
<form className='form container' onSubmit={onSubmit}>
    <div className= 'form-ggroup inputs'>
        <label>Username 
            {
               <input 
                    name='username'
                    type='text'
                    placeholder='name goes here'
                    maxLength= '30'
                    value= {values.username}
                    onchange= {onchange}/>

            }
        </label>

        <label> Email
                <input 
                    name= 'email'
                    type='text'
                    placeholder='enter email'
                    maxLength='30'
                    value={values.email}
                    onchange={onchange}/>

        </label>
    </div>

</form>


)

}