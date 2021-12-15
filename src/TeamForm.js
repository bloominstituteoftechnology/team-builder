import React from 'react'

export default function TeamForm(props) {
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


    return (
        <form onSubmit={onSubmit}>
            <label>Name
              <input
                name="name"
                type="text"
                placeholder="name"
                maxLength="30"
                value={values.name}
                onChange={onChange}
              />
            </label>
            <label>Email
              <input
                name="email"
                type="email"
                placeholder="email"
                value={values.email}
                onChange={onChange}
              />
             </label>
             <label> Role
              <select value={values.role} name="role" onChange={onChange}>
                <option value="">-- Select a Role --</option>
                <option value="hr">HR</option>
                <option value="other">other</option>
                <option value="developer">developer</option>
               </select>
            </label>

            <div>
                <button type ='submit'>submit</button>
            </div>
        </form>
    )


}