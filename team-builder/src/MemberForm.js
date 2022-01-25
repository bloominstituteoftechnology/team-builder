import React from "react";

export default function MemberForm(props){

    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value);
      }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return(
        <form onSubmit={onSubmit}>
    <div>
        <label>Member Name
              <input
                name="membername"
                type="text"
                placeholder="Member Name"
                maxLength='30'
                value={values.membername}
                onChange={onChange}
              />
        </label>
        <label>Email
              <input
                name="email"
                type="email"
                placeholder="EMAIL ME"
                value={values.email}
                onChange={onChange}
              />
        </label>
        <label>Role
              <select value={values.role} name="role" onChange={onChange}>
                <option value="">-- Select a Role --</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
                <option value="Alumni">Alumni</option>
              </select>
        </label>
        <div>
          <button>submit</button>
        </div>
    </div>
        </form>
    )
}