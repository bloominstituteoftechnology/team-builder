import React from 'react'
import styled from 'styled-components'

export default function Form(props) {

    const {values, update, submit}= props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
      }

      const onSubmit = evt => {
          evt.preventDefault()
          submit()
      }

      const InputDiv=styled.div`
      display:flex;
      flex-direction: column;
      padding: 20px;
      width:80%;
      align-items:center;
      align-content: space-around;
      `

return(
    <div className='formContainer'>
        <form onSubmit={onSubmit}>
            <div>
                <label>Friend name
                    <input 
                        name='friendName'
                        type='text'
                        value={values.friendname}
                        onChange={onChange}
                        placeholder='Who is my FRIEND!?'
                        maxLength= '20'
                    />
                </label>
                <label>Give me your person email!
                    <input 
                        name='email'
                        type='email'
                        value={values.eamil}
                        onChange={onChange}
                        placeholder='personal@email.com'
                    />
                </label>
                <label>Roll in this team
                    <select value ={values.roll} name='roll' onChange={onChange}>
                        <option value=''>-- Select roll... --</option>
                        <option value='wizard'>Wizard</option>
                        <option value='rogue'>Rogue</option>
                        <option value='knight'>Knight</option>
                        <option value='bard'>Bards suck.</option>
                    </select>
                </label>
                <button disabled={!values.friendName || !values.email || !values.roll}>
                    Submit to me!
                </button>
            </div>
        </form>

    </div>

)
}