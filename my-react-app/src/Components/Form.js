import React from "react";


export default function Form(props) {
const { values, update, submit } = props

const onChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    update(name, value);
}

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}


return(
 <form className='form container' onSubmit={onSubmit}>
     <div className='form-group inputs'>
        <label>username
            <input
            type="text"
            name="username"
            placeholder="Type a username"
            value={values.username}
            onChange={onChange}
            maxLength="30"
            />
        </label>
        <label>Email
            <input
            type="email"
            name="email"
            placeholder="Type a email"
            value={values.email}
            onChange={onChange}
            />
        </label>
        <select value={values.role} name="role" onChange={onChange}>
            <option value="">---Select a Sport---</option>
            <option value="Basketball">---Basketball---</option>
            <option value="Football">---Football--</option>
            <option value="Soccer">---Soccer---</option>
        </select>
        <label>Role</label>
        <div className='submit'>
            <button>submit</button>
        </div>
     </div>
 </form>
)
}