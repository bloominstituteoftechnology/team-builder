import React from 'react';

export default function Form(props) {
    return (
      <div className="form">
        <form onSubmit={props.onFormSubmit}>

            <label>First Name
            <input  
                onChange={props.onInputChange}
                value= {props.formValues.fname}
                name='fname' 
                placeholder='First Name: ' 
            />
            </label>
            <br/>
            <label>Last Name
            <input  
                onChange={props.onInputChange}
                value= {props.formValues.lname}
                name='lname' 
                placeholder='Last Name: ' 
            />
            </label>
            <br/>
            <label>Job
            <input  
                onChange={props.onInputChange}
                value= {props.formValues.job}
                name='job' 
                placeholder='Job: ' 
            />
            </label>
            <br/>
            <label>Email
            <input  
                onChange={props.onInputChange}
                value= {props.formValues.email}
                name='email' 
                placeholder= 'Email: ' 
            />
            </label>
            <br/>

            
            <input type='submit'/>

        </form>
      </div>
    );
  };
