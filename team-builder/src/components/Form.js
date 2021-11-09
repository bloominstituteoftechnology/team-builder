import React from 'react';

export default function TeamForm(props){
    const {values,update,submit} = props;
console.log(values)
    const onChange = (event) => {
        const {name,value}= event.target;

        update(name,value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                />
                <br/>
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    value ={values.email}
                    onChange={onChange}
                />
                <br/>
                <label>Role: </label>
                <select value={values.role} name="role" onChange={onChange}>
                    <option value="">-- Select a Role --</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Design Engineer">Design Engineer</option>
                    
                </select>
                <br/>
                <input type="Submit"/>
            </form>
        </div>
    )
}