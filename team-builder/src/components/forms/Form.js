import React, { useState } from 'react';



const Form = props =>{
    const [newMember, setNewMember]= useState(
        {
            name: '',
            email: '',
            role: ''
        }
        )


    const changeHandler = e =>{
        setNewMember({...newMember, [e.target.name]: e.target.value})
    }

    const submitForm = e =>{
        e.preventDefault();
        props.setNewMember(newMember);
        setNewMember({name: '', email: '', role: ''})
    }
    
    return(
        <div >
            <form onSubmit={submitForm}>
                <label htmlFor='name'> Name 
                <input
                    type='text'
                    name='name'
                    placeholder='Enter Name'
                    value={newMember.name}
                    onChange={changeHandler}
            />
                </label>
        
                <label htmlFor='email'> Email
                <input 
                    type='email'
                    name='email'
                    placeholder='Enter email'
                    value={newMember.email}
                    onChange={changeHandler}
                />
            </label>
        
            <label hmtlFor='role'> Role
                <input 
                    type='text'
                    name='role'
                    placeholder='Enter Role'
                    value={newMember.role} 
                    onChange={changeHandler}
                />
            </label>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )

}


export default  Form;