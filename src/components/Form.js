import React from 'react'

export default function Form(props) {
  const { values, update, submit } = props

  const onChange = e => {
    // 💡 Change handler pulling name & value of event object
    const {name, value} = e.target
    // Use update from props
    update(name, value)
  }

  const onSubmit = e => {
    // 💡 Submit handler; prevent browser from reload on submit
    e.preventDefault()
    // Use submit from props
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        {/* //! Text Inputs */}
        <label>Name: 
            <input
            name='name'
            type='text'
            value={values.name}
            onChange={onChange}
            placeholder='type a name...'
            maxLength='30'
            />
        </label>

        <label>Email: 
          <input
                name='email'
                type='text'
                value={values.email}
                onChange={onChange}
                placeholder='type an email...'
                maxLength='30'
              />
        </label>

        {/* //! Dropdown */}
        <label>Role: 
            <select value={values.role} name='role' onChange={onChange}>
            
                {/* //* Roles from https://www.16personalities.com/personality-types */}
                <option value=''> -- Select Role -- </option>
                <option value='ARCHITECT'>Architect</option>
                <option value='LOGICIAN'>Logician</option>
                <option value='COMMANDER'>Commander</option>
                <option value='DEBATER'>Debater</option>
                <option value='ADVOCATE'>Advocate</option>
                <option value='MEDIATOR'>Mediator</option>
                <option value='PROTAGONIST'>Protagonist</option>
                <option value='CAMPAIGNER'>Campaigner</option>
                <option value='LOGISTICIAN'>Logistician</option>
                <option value='DEFENDER'>Defender</option>
                <option value='EXECUTIVE'>Executive</option>
                <option value='CONSUL'>Consul</option>
                <option value='VIRTUOSO'>Virtuoso</option>
                <option value='ADVENTURER'>Adventurer</option>
                <option value='ENTREPENEUR'>Entrepeneur</option>
                <option value='ENTERTAINER'>Entertainer</option>
            
          </select>
        </label>

        <div className='submit'>
          <button disabled={!values.name || !values.email || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}
