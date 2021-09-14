import React from 'react';

export default function Form (props) {
    const {value, update, submit} = props;

    const onChange = (event) => {
        const { name, value } = event.target;
        // const name = event.target.name;
        // const value = event.target.value;
        update(name, value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <div className="Form-name">
            <form autoComplete="off" onSubmit={onSubmit}>
                <label>
                    <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={onChange}
                    value={value.name}
                    required={true}
                />
                </label>
            <div className="Form-email">
                <label>
                    <input 
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={onChange}
                    value={value.email}
                    required={true}
                    />
                </label>
            </div>
                <label>
                    <select name="role" onChange={onChange}>
                        <option value="select">role</option>
                        <option value="chump">novice</option>
                        <option value="casual">amateur</option>
                        <option value="pro">skilled</option>
                    </select>
                </label>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}