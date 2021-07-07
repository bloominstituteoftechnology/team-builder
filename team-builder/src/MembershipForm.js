import React from 'react'
import './styles.css'

export default function MembershipForm(props) {
    const { values, update, submit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    return (

        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label >
                    <input
                        placeholder="Username"
                        name="username"
                        type="text"
                        maxLength="30"
                        value={values.username}
                        onChange={onChange}
                    />
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        maxLength="30"
                        value={values.email}
                        onChange={onChange}
                    />
                    <select name="role" value={values.role} onChange={onChange}>
                        <option value="">--- Select Role ---</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="IOS/ Andriod Developer">IOS/ Andriod Developer</option>

                    </select>
                </label>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>

        </form>


    )

}
