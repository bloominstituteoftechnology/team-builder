import React from "react";

const Form = (props) => {
const {values, update, submit} = props;

const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target;
    update (name, value);
}

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

return (
    <div>
    <form onSubmit={onSubmit}>
        <label> Name: 
            <input 
                type='text'
                name='name'
                value={props.values.name}
                placeholder='enter name'
                onChange={onchange}
            />
        </label>
        <label> Email:
            <input 
                type='email'
                name='email'
                value={props.values.email}
                placeholder='enter email'
                onChange={onChange}
            />
        </label>
        <label> Role:
            <select 
                value={props.values.role}
                name='role'
                onChange={onChange}
            >
                <option value=''>---Select Role---</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='Designer'>Designer</option>
            </select>
        </label>
        <div>
            <button>submit</button>
        </div>
    </form>
</div>
)
}

export default Form;