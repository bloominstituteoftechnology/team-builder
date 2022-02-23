import React from "react";

export default function Form(props){
    const onChange = evt=>{
        const {name,value}=evt.target
        props.change(name,value);
    }
    const onSubmit = evt=>{
        evt.preventDefault();
        props.submit()
    }


    return (
        <form onSubmit={onSubmit}> 
            <label>Name
            <input
                name='name'
                type='text'
                placeholder="Enter name"
                value={props.values.name}
                onChange={onChange}
            />
            </label> 
            <label>Age
            <input
                name='age'
                type='number'
                placeholder="Enter Age"
                value={props.values.age}
                onChange={onChange}
            />
            </label> 
            <label>Email
            <input
                name='email'
                type='email'
                placeholder="Enter Email Address"
                value={props.values.email}
                onChange={onChange}
            />
            </label> 
            <label>Hobbies
            <input
                name='hobbies'
                type='text'
                placeholder="Enter hobbies"
                value={props.values.hobbies}
                onChange={onChange}
            />
            </label> 
            <label>Location
            <input
                name='location'
                type='text'
                placeholder="Enter the state you live in"
                value={props.values.location}
                onChange={onChange}
            />
            </label> 
            <input 
            type='submit'
            value='Sign Up!'
            />
        </form>
    )
}