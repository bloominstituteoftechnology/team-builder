export default function Form(props) {
    // THESE ARE THE **EXACT PROPS** Form EXPECTS!!!
    const { values, update, submit } = props
    const onChange = evt => {
        // IMPLEMENT the change handler for our inputs and dropdown
    // * pull the name of the input from the event object
    // * pull the value of the input from the event object
    // * use the `update` callback coming in through props
        const { name, value } = evt.target
        update(name, value)
    }
    
    const onSubmit = evt => {
        // IMPLEMENT the submit handler & don't allow the browser to reload!
     evt.preventDefault();
        submit()
      }
      return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>
            <label>Name
              {/* let's make an input of type `text` for name.
                  Controlled inputs need `value` and `onChange` props.
                  Inputs render what they're told - their current value comes from app state.
                  At each keystroke, a change handler fires to change app state. */}
              <input 
                 type="text" 
                 value={values.name}
                 placeholder="name" 
                 name="name" 
                 maxLength="25" 
                 onChange={onChange}
              />
            </label>
            <label>Email
                {/* let's do the same for Email */}
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
                <option>Frontend Engineer</option>
                <option>Backend Engineer</option>
                <option>Designer</option>
                <option>Project Manager</option>
                <option>Coordinator</option>
              </select>
            </label>
            <div className='submit'>
              <button>ADD TEAM</button>
            </div>
          </div>
        </form>
      )
    }