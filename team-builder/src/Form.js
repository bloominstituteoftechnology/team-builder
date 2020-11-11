import react from 'react';

export default function WorkerForm(props) {
    const { values, update, submit } = props;
    const onChange = (evt) => {
        const {name, value } =evt.target
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group-inputs'>
            <label>
                username
                <input
                type="text"
                name="username"
                onChange={onChange}
                value={values.username}
                placeholder="type a username"
                maxLength="30"
                ></input>
            </label>
            <label>
                Email
                <input
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
                placeholder='email'
                ></input>
            </label>
            <label>
                Role
                <select name='role' value={values.role} onChange={onChange}>
                <option value="">-----</option>
            <option value="Frontend Web Dev">Frontend Web Dev</option>
            <option value="Backend Web Dev">backend Web Dev</option>
            <option value="Full Stack Web Dev">Full Stack Web Dev</option>
                </select>
            </label>
            </div>
            <div className="submit">
          <button>submit</button>
        </div>
    
        </form>
    )
}