import React from 'react'

export default function TeamMemberForm(props) {
    const { values, update, submit } = props

    const onChange = (evt) => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>
          Username
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
          <input
            type="text"
            name="username"
            onChange={onChange}
            value={values.username}
            placeholder="type a username"
            maxLength="30"
          />
        </label>

        <label>
          Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Enter an email"
            maxLength="50"
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>
          Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">---select role---</option>
            <option value="student">Team Member</option>
            <option value="instructor">Team Leader</option>
            <option value="tl">Consultant</option>
            <option value="tl">Team Assistant Leader</option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );

}
