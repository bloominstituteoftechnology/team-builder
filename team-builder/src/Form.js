import React from 'react'


export default function Form(props) {

const {values, update, submit} = props

const onChange = evt => {
    const {name, value} = evt.target
    update(name, value)
}

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}


return (
    <form className = 'form container' onSubmit = {onSubmit}>
         <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label htmlFor='username'>Username
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
            <input
              id='username'
              type='text'
              name='username'
              onChange={onChange}
              value={values.username}
            />
        </label>
        <label htmlFor='role'>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select id='role' name='role' onChange={onChange} value={values.role}>
            <option value=''>-- Select a Role --</option>
            <option value='Student'>Student</option>
            <option value='TL'>Team Lead</option>
            <option value='Instructor'>Instructor</option>
            <option value='Alumni'>Alumni</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
)

}
