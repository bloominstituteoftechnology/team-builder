



export default function TeamForm(props) {
const { values, update, submit } = props
const onChange = e => {
    const { name, value } = e.target
    update(name, value)
}
const onSubmit = e => {
 e.preventDefault();
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
          <input 
             type="text" 
             value={values.name}
             placeholder="name" 
             name="name" 
             maxLength="20" 
             onChange={onChange}
          />
        </label>

        <label>Email
          <input 
            type="email"
            value={values.email}
            placeholder="Email"
            name="email"
            maxLength="30"
            onChange={onChange}
          />
        </label>

        <label>Role
          <select name="role" onChange={onChange} value={values.role}>
            <option>Backend Engineer</option>
            <option>Frontend Engineer</option>
            <option>Coordinator</option>
            <option>Designer</option>
            <option>Project Manager</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )

}