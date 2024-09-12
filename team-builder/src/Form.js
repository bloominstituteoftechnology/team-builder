export default function Form(props) {
    const { values, update, submit } = props;
    const onChange = (e) => {
        const {name, value } =e.target
        update(name, value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

return (
<Form className='form container' onSubmit={onSubmit}>
    <div className='form-inputs'>
     <label>
     Username
    <input
        type="text"
        name="username"
        onChange={onChange}
        value={values.username}
        placeholder="type a username"
        maxLength="25"></input></label>
<label>
    Email
<input
     type='email'
    name='email'
    onChange={onChange}
    value={values.email}
    placeholder='email'></input></label>

<label>
    Role
    <select name='role' value={values.role} onChange={onChange}>
    <option value="">---</option>
    <option value="Frontend Web Dev">Frontend Web Dev</option>
    <option value="Backend Web Dev">Backend Web Dev</option>
    <option value="Full Stack Web Dev">Full Stack Web Dev</option>
 </select>
</label>
</div>

 <div className="submit">
    <button>Submit</button>
</div>
</Form>
 )}