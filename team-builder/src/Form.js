export function MemberForm(props) {
    const { values, update, submit } = props;
    const onChange = (evt) => {
        const {name, value } = evt.target
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    
    return(
        <form className='formContainer' onSubmit={onSubmit}>
            <div className='formInputs'>
            <label>
                Name
                <input
                type="text"
                name="username"
                onChange={onChange}
                value={values.name}
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
            <option value="Frontend Web Developer">Frontend Web Developer</option>
            <option value="Backend Web Developer">Backend Web Developer</option>
            <option value="Full Stack Web Developer">Full Stack Web Developer</option>
                </select>
            </label>
            </div>
            <div className="submit">
          <button>submit</button>
        </div>

        </form>
    )
}

export function Member(props) {
    const { details } = props
  
    if (!details) {
      return <h3>Working fetching your friend&apos;s details...</h3>
    }
  
    return (
      <div className='friend-container'>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
    )
  }

export const memberList = [
    {
      username: 'Jonathan Garcia',
      role: 'Full Stack Web Dev',
      email: '714jonathanrenegarcia@gmail'
    },
    {
      username: 'James Gosling',
      role: 'Backend Web Dev',
      email: 'JamesJavaGosling@gmail.com'
    },
    {
      username: 'Linus Torvalds',
      role: 'Frontend Web Dev',
      email: 'LinusLinux@gmail.com'
    },
  ];